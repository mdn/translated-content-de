---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-labelledby` Attribut identifiziert das Element (oder die Elemente), das das Element, auf das es angewendet wird, beschriftet.

## Beschreibung

Die `aria-labelledby` Eigenschaft ermöglicht es Autoren, auf andere Elemente auf der Seite zu verweisen, um einen zugänglichen Namen zu definieren. Dies ist nützlich, wenn Elemente verwendet werden, die keine native Unterstützung zum Verknüpfen von Elementen haben, um einen zugänglichen Namen bereitzustellen.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Beispielsweise kommt der zugängliche Name für ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie das Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}} erhalten ihren zugänglichen Namen aus dem Inhalt der zugehörigen Elemente; für diese Elemente kommt der zugängliche Name vom {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}}, und {{HTMLElement('caption')}}.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um auf ein anderes Element zu verweisen, um dessen zugänglichen Namen zu definieren, wenn ein Element seinen zugänglichen Namen aus Inhalten verwenden muss, die woanders im DOM sind.

Wenn es keinen Inhalt gibt, der referenziert werden kann, um einen zugänglichen Namen zu erstellen, sollte das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut stattdessen verwendet werden.

Der Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden zur Bereitstellung eines zugänglichen Namens, einschließlich `aria-label`, {{HTMLElement('label')}}, und dem inneren Text des Elements.

Die `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribute referenzieren beide andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte auf kurzen Text verweisen, der dem Element einen zugänglichen Namen gibt. `aria-describedby` wird verwendet, um auf längeren Inhalt zu verweisen, der eine Beschreibung liefert. Wenn es kein Element im DOM gibt, das eine geeignete, kurze Beschriftung für einen zugänglichen Namen für ein interaktives Element bietet, verwenden Sie `aria-label`, um den zugänglichen Namen für ein interaktives Element zu definieren.

> [!NOTE]
> Während im US-amerikanischen Englisch das Attribut als "labeledby" angenommen werden könnte, hat sich die Schreibweise "labelledby" etabliert und wird in Zugänglichkeits-APIs verwendet.

Das folgende Beispiel nutzt `aria-labelledby`, um einen zugänglichen Namen für eine Checkbox-Eingabe zu liefern, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation ähnlich ist wie die Verwendung eines HTML {{HTMLElement('label')}} Elements mit dem `for` Attribut, es gibt jedoch einige sehr wichtige Unterschiede. Das `aria-labelledby` Attribut definiert nur den zugänglichen Namen. Es bietet nicht die anderen Funktionen von `<label>`, wie z. B. das Aktivieren der Eingabe durch Klicken auf das beschriftende Element. Dies muss mit JavaScript wieder hinzugefügt werden.

Glücklicherweise funktioniert der HTML {{HTMLElement('input')}} mit `type="checkbox"` nativ mit `<label>`. Wenn möglich, verwenden Sie folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby` Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass sie andere Methoden der Namensgebung des Elements überschreibt, einschließlich `aria-label`, andere benannte Attribute und sogar den Inhalt des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby` Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste, was bedeutet, dass Sie mehr als ein Element zu einem einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements selbst einschließen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel ist der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der `aria-labelledby` Eigenschaftswerte ist wichtig. Wenn mehr als ein Element durch `aria-labelledby` referenziert wird, wird der Inhalt jedes referenzierten Elements in der Reihenfolge kombiniert, in der sie im `aria-labelledby` Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby` Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur der erste Verweis verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Der Wert der `aria-labelledby` Eigenschaft kann Inhalte aus Elementen einschließen, die nicht einmal sichtbar sind. Während Sie Benutzern von unterstützender Technologie denselben Inhalt wie allen anderen Benutzern bereitstellen sollten, können Sie Inhalte aus Elementen mit dem HTML [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden) Attribut, CSS [`display: none`](/de/docs/Web/CSS/display), und CSS [`visibility: hidden`](/de/docs/Web/CSS/visibility) in der berechneten Namenszeichenfolge einschließen.

6. Die `aria-labelledby` Eigenschaft integriert den Wert von Eingabeelementen. Wenn der Wert eine `<input>` referenziert, wird der aktuelle Wert des Formularelements in die berechnete Namenszeichenfolge eingeschlossen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby` Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` ein anderes Element referenziert, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby` Attribut des referenzierten Elements ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein kann und verborgene Inhalte referenzieren kann, ist es sehr wichtig, mit assistierenden Technologien zu testen, um sicherzustellen, dass der erwartete Name den Nutzern präsentiert wird.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die das aktuelle Element beschriften.

## Zugehörige Rollen

Verwendet in fast allen Rollen, **außer** in Rollen, denen kein zugänglicher Name vom Autor zugewiesen werden kann.

Das `aria-labelledby` Attribut wird **NICHT** unterstützt in:

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
