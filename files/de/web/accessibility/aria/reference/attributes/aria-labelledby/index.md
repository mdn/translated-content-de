---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-labelledby`-Attribut identifiziert das Element (oder die Elemente), die das Element beschriften, auf das es angewendet wird.

## Beschreibung

Die `aria-labelledby`-Eigenschaft ermöglicht es Autoren, auf andere Elemente auf der Seite zu verweisen, um einen zugänglichen Namen zu definieren. Dies ist nützlich, wenn Elemente verwendet werden, die keine native Unterstützung für die Verknüpfung von Elementen bieten, um einen zugänglichen Namen bereitzustellen.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Beispielsweise stammt der zugängliche Name für ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie z.B. Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}, erhalten ihren zugänglichen Namen aus dem Inhalt zugeordneter Elemente; für diese Elemente stammt der zugängliche Name vom {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} bzw. {{HTMLElement('caption')}}.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um auf ein anderes Element zu verweisen, um seinen zugänglichen Namen zu definieren, wenn der zugängliche Name eines Elements Inhalte aus anderen Bereichen des DOM nutzen muss.

Wenn es keinen Inhalt gibt, der für einen zugänglichen Namen referenziert werden kann, sollte stattdessen das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwendet werden.

Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden, einen zugänglichen Namen bereitzustellen, einschließlich `aria-label`, {{HTMLElement('label')}} und dem inneren Text des Elements.

Die Attribute `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) beziehen sich beide auf andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte auf kurzen Text verweisen, der dem Element einen zugänglichen Namen gibt. `aria-describedby` wird verwendet, um auf längeren Inhalt zu verweisen, der eine Beschreibung bietet. Wenn es im DOM kein Element gibt, das ein geeignetes kurzes Label für einen zugänglichen Namen für ein interaktives Element bereitstellt, verwenden Sie `aria-label`, um den zugänglichen Namen zu definieren.

> [!NOTE]
> Während im Amerikanischen Englisch "labeled" mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und wird in Accessibility-APIs verwendet.

Das folgende Beispiel verwendet `aria-labelledby`, um einen zugänglichen Namen für eine Checkbox-Eingabe bereitzustellen, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation ähnlich der Verwendung eines HTML-{{HTMLElement('label')}}-Elements mit dem `for`-Attribut ist, es jedoch einige sehr wichtige Unterschiede gibt. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet keine der anderen Funktionen von `<label>`, wie z.B. das Klicken auf das beschriftende Element, um das zugehörige Eingabefeld zu aktivieren. Das muss mit JavaScript hinzugefügt werden.

Glücklicherweise funktioniert das HTML-{{HTMLElement('input')}} mit `type="checkbox"` mit native `<label>`. Wenn möglich, verwenden Sie Folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass dies andere Benennungsmethoden, einschließlich `aria-label`, andere Benennungsattribute und sogar den Inhalt des Elements überschreibt.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel lautet der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte Referenzliste von IDs, was bedeutet, dass Sie mehr als ein Element zu einem einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements selbst einschließen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel lautet der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der Werte der `aria-labelledby`-Eigenschaft ist wichtig. Wenn mehr als ein Element durch `aria-labelledby` referenziert wird, wird der Inhalt jedes referenzierten Elements in der Reihenfolge kombiniert, in der sie in dem `aria-labelledby`-Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby`-Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur der erste Verweis verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Der `aria-labelledby`-Eigenschaftswert kann Inhalte von Elementen enthalten, die nicht sichtbar sind. Auch wenn Sie Nutzern von unterstützender Technologie denselben Inhalt wie allen anderen Nutzern zur Verfügung stellen sollten, können Sie Inhalte von Elementen mit dem HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS [`display: none`](/de/docs/Web/CSS/display) und CSS [`visibility: hidden`](/de/docs/Web/CSS/visibility) in den berechneten Namen aufnehmen.

6. Die `aria-labelledby`-Eigenschaft umfasst den Wert von Eingabeelementen. Wenn der Wert ein `<input>` referenziert, wird der aktuelle Wert des Formularelements in den berechneten Namen eingefügt und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht gekettet werden. Wenn ein Element mit `aria-labelledby` auf ein anderes Element verweist, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut auf dem referenzierten Element ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein kann und versteckte Inhalte referenziert werden können, ist das Testen mit unterstützenden Technologien, um sicherzustellen, dass der erwartete Name den Nutzern präsentiert wird, sehr wichtig.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die auf die Elemente verweisen, die das aktuelle Element beschriften.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet, **außer** in Rollen, denen der Autor keinen zugänglichen Namen zuweisen kann.

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

- HTML-{{HTMLElement('label')}}-Element
- HTML-{{HTMLElement('legend')}}-Element
- HTML-{{HTMLElement('caption')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
