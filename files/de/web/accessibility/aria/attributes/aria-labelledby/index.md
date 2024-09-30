---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-labelledby` Attribut identifiziert das Element (oder die Elemente), das/die das Element, auf das es angewendet wird, beschriftet/beschriften.

## Beschreibung

Die `aria-labelledby`-Eigenschaft ermöglicht es Autoren, auf andere Elemente auf der Seite zu verweisen, um einen zugänglichen Namen zu definieren. Dies ist nützlich bei der Verwendung von Elementen, die keine native Unterstützung für die Verknüpfung von Elementen zur Bereitstellung eines zugänglichen Namens haben.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Zum Beispiel erhält ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} ihren zugänglichen Namen aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie das Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}, erhalten ihren zugänglichen Namen aus dem Inhalt der zugehörigen Elemente; für diese Elemente stammt der zugängliche Name von {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} und {{HTMLElement('caption')}}.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um auf ein anderes Element zu verweisen und so seinen zugänglichen Namen festzulegen, wenn der zugängliche Name eines Elements Inhalt von einem anderen Ort im DOM verwenden muss.

Wenn es keinen Inhalt gibt, der für die Erstellung eines zugänglichen Namens referenziert werden kann, sollte stattdessen das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut verwendet werden.

Der Zweck von `aria-labelledby` ist der gleiche wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden zur Bereitstellung eines zugänglichen Namens, einschließlich `aria-label`, {{HTMLElement('label')}} und dem inneren Text des Elements.

Die Attribute `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verweisen beide auf andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte auf kurzen Text verweisen, der dem Element einen zugänglichen Namen gibt. `aria-describedby` wird verwendet, um auf längeren Inhalt zu verweisen, der eine Beschreibung liefert. Wenn es im DOM kein Element gibt, das eine kurze Beschriftung bietet, die für einen zugänglichen Namen eines interaktiven Elements geeignet ist, verwenden Sie `aria-label`, um den zugänglichen Namen für ein interaktives Element festzulegen.

> [!NOTE]
> Während in US-Englisch das Attribut als "labeledby" angenommen würde, hat sich die Schreibweise "labelledby" etabliert und wird in Zugänglichkeits-APIs verwendet.

Im folgenden Beispiel wird `aria-labelledby` verwendet, um einen zugänglichen Namen für ein Checkbox-Eingabefeld bereitzustellen, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation der Verwendung eines HTML-{{HTMLElement('label')}}-Elements mit dem `for`-Attribut ähnelt, es jedoch einige sehr wichtige Unterschiede gibt. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet keine der anderen Funktionen von `<label>`, wie z.B. das Aktivieren des Eingabeelements durch Klicken auf das beschriftende Element. Dies muss mit JavaScript hinzugefügt werden.

Glücklicherweise funktioniert das HTML-{{HTMLElement('input')}} mit `type="checkbox"` nativ mit `<label>`. Wenn möglich, verwenden Sie Folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass sie andere Methoden zur Benennung des Elements, einschließlich `aria-label`, andere Benennungsattribute und sogar den Inhalt des Elements überschreibt.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte Referenzliste von IDs, was bedeutet, dass Sie mehr als ein Element in einen einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements selbst einbeziehen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel ist der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der Werte der `aria-labelledby`-Eigenschaft ist wichtig. Wenn mehr als ein Element von `aria-labelledby` referenziert wird, wird der Inhalt von jedem referenzierten Element in der Reihenfolge kombiniert, in der sie im `aria-labelledby`-Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby`-Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur die erste Referenz verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Der Wert der `aria-labelledby`-Eigenschaft kann Inhalte von Elementen enthalten, die nicht einmal sichtbar sind. Während Sie Benutzern von unterstützenden Technologien den gleichen Inhalt wie allen anderen Benutzern bereitstellen sollten, können Sie Inhalte von Elementen mit dem HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden), CSS [`display: none`](/de/docs/Web/CSS/display) und CSS [`visibility: hidden`](/de/docs/Web/CSS/visibility) in die berechnete Namenszeichenfolge einbeziehen.

6. Die `aria-labelledby`-Eigenschaft umfasst den Wert von Eingabeelementen. Wenn der Wert auf ein `<input>` verweist, wird der aktuelle Wert des Formularelements in die berechnete Namenszeichenfolge einbezogen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` auf ein anderes Element verweist, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut auf dem referenzierten Element ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein und auf versteckte Inhalte verweisen kann, ist das Testen mit unterstützenden Technologien sehr wichtig, um sicherzustellen, dass der erwartete Name den Benutzern präsentiert wird.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die das aktuelle Element beschriften.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet **mit Ausnahme** von Rollen, denen durch den Autor kein zugänglicher Name zugewiesen werden kann.

Das `aria-labelledby`-Attribut wird **NICHT** unterstützt in:

- [`code`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('label')}} Element
- HTML {{HTMLElement('legend')}} Element
- HTML {{HTMLElement('caption')}} Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
