---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-labelledby`-Attribut identifiziert das oder die Elemente, die das Element, auf das es angewandt wird, beschriften.

## Beschreibung

Die Eigenschaft `aria-labelledby` ermöglicht es den Autor\*innen, andere Elemente auf der Seite zu referenzieren, um einen zugänglichen Namen zu definieren. Dies ist nützlich, wenn Elemente verwendet werden, die keine native Unterstützung für die Zuordnung von Elementen zur Bereitstellung eines zugänglichen Namens haben.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) von ihrem inneren Inhalt. Zum Beispiel erhalten ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} ihren zugänglichen Namen aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie Formularelemente {{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}, erhalten ihren zugänglichen Namen aus dem Inhalt der zugehörigen Elemente; für diese Elemente kommt der zugängliche Name von dem {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} und {{HTMLElement('caption')}} jeweils.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um ein anderes Element zu referenzieren, um dessen zugänglichen Namen zu definieren, wenn der zugängliche Name eines Elements Inhalte aus einem anderen Teil des DOM nutzen muss.

Wenn kein Inhalt vorhanden ist, der zum Erstellen eines zugänglichen Namens referenziert werden kann, sollte stattdessen das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwendet werden.

Der Zweck von `aria-labelledby` ist der gleiche wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden zur Bereitstellung eines zugänglichen Namens, einschließlich `aria-label`, {{HTMLElement('label')}} und dem inneren Text des Elements.

Die Attribute `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenzieren beide andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte auf kurzen Text verweisen, der dem Element einen zugänglichen Namen gibt. `aria-describedby` wird verwendet, um auf längeren Inhalt zu verweisen, der eine Beschreibung liefert. Wenn es kein Element im DOM gibt, das eine kurze Beschriftung bietet, die für einen zugänglichen Namen für ein interaktives Element geeignet ist, verwenden Sie `aria-label`, um den zugänglichen Namen für ein interaktives Element zu definieren.

> [!NOTE]
> Während "labeled" im amerikanischen Englisch mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und wird in den Zugriffs-APIs verwendet.

Das folgende Beispiel verwendet `aria-labelledby`, um einem Kontrollkästchen-Input einen zugänglichen Namen zu geben, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation ähnlich ist wie die Verwendung eines HTML-{{HTMLElement('label')}}-Elements mit dem `for`-Attribut. Es gibt jedoch einige sehr wichtige Unterschiede. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet keine der anderen Funktionalitäten von `<label>`, wie z.B. das Aktivieren des Eingabefeldes, wenn auf das beschriftende Element geklickt wird. Dies muss mit JavaScript hinzugefügt werden.

Glücklicherweise arbeitet das HTML-{{HTMLElement('input')}} mit `type="checkbox"` mit nativen `<label>`. Wenn möglich, verwenden Sie Folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass sie andere Methoden zur Benennung des Elements überschreibt, einschließlich `aria-label`, andere Benennungsattribute und sogar den Inhalt des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste, was bedeutet, dass Sie mehr als ein Element zu einem einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Elements selbst einschließen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel ist der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der Werte von `aria-labelledby` ist wichtig. Wenn mehr als ein Element durch `aria-labelledby` referenziert wird, wird der Inhalt jedes referenzierten Elements in der Reihenfolge kombiniert, in der sie im `aria-labelledby`-Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby`-Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur die erste Referenz verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird behandelt als `aria-labelledby="attr rm13">`.

5. Die `aria-labelledby`-Eigenschaft kann Inhalte von Elementen einbeziehen, die nicht einmal sichtbar sind. Während Sie Benutzern unterstützender Technologien die gleichen Inhalte wie anderen Benutzern bieten sollten, können Sie Inhalte von Elementen mit dem HTML [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attribut, CSS [`display: none`](/de/docs/Web/CSS/display) und CSS [`visibility: hidden`](/de/docs/Web/CSS/visibility) in den berechneten Namensstring einfügen.

6. Die `aria-labelledby`-Eigenschaft enthält den Wert von Eingabeelementen. Wenn der Wert auf ein `<input>` verweist, wird der aktuelle Wert des Formularsteuerelements in den berechneten Namensstring einbezogen, der sich ändert, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` auf ein anderes Element verweist, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut des referenzierten Elements ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein kann und auf versteckte Inhalte verweisen kann, ist das Testen mit unterstützenden Technologien, um sicherzustellen, dass der erwartete Name den Benutzern angezeigt wird, sehr wichtig.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen geteilte Liste von einer oder mehreren ID-Werten, die die Elemente referenzieren, die das aktuelle Element beschriften.

## Zugeordnete Rollen

Wird in fast allen Rollen verwendet, **außer** in Rollen, denen kein zugänglicher Name vom Autor bereitgestellt werden kann.

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
