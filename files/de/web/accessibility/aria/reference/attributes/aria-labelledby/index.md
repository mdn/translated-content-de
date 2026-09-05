---
title: "ARIA: aria-labelledby-Attribut"
short-title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das `aria-labelledby`-Attribut identifiziert das Element (oder die Elemente), das bzw. die dasjenige Element beschriftet/beschriften, auf das es angewendet wird.

## Beschreibung

Das `aria-labelledby`-Attribut ermöglicht es Autoren, andere Elemente auf der Seite zu referenzieren, um einen zugänglichen Namen zu definieren. Dies ist nützlich, wenn Sie Elemente verwenden, die keine native Unterstützung für die Verbindung von Elementen zur Bereitstellung eines zugänglichen Namens haben.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Der zugängliche Name für ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} beispielsweise stammt aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie z. B. Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}, erhalten ihren zugänglichen Namen aus dem Inhalt der zugehörigen Elemente; für diese Elemente kommt der zugängliche Name von dem {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} und {{HTMLElement('caption')}} entsprechend.

Alle interaktiven Elemente müssen über einen zugänglichen Namen verfügen. `aria-labelledby` kann verwendet werden, um ein anderes Element zu referenzieren, um seinen zugänglichen Namen zu definieren, wenn ein Elementinhalt benötigt wird, der an anderer Stelle im DOM zur Verfügung steht.

Wenn kein Inhalt vorhanden ist, der verwendet werden kann, um einen zugänglichen Namen zu erstellen, sollte das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut anstelle verwendet werden.

Der Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat auch Vorrang vor den meisten anderen Methoden, die einen zugänglichen Namen bereitstellen, wie dem {{HTMLElement('label')}} und dem inneren Text des Elements. Beachten Sie, dass [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) die höchste Priorität bei der Einstellung des ARIA-Labels hat.

Die `aria-labelledby`- und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribute referenzieren beide andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte kurzen Text referenzieren, der dem Element einen zugänglichen Namen gibt. `aria-describedby` wird verwendet, um längere Inhalte zu referenzieren, die eine Beschreibung bieten. Wenn es kein Element im DOM gibt, das eine kurze Beschriftung bietet, die als zugänglicher Name für ein interaktives Element geeignet ist, verwenden Sie `aria-label`, um den zugänglichen Namen zu definieren.

> [!NOTE]
> Während im Amerikanischen Englisch "labeled" mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und ist die Schreibweise, die in Barrierefreiheits-APIs verwendet wird.

Das folgende Beispiel verwendet `aria-labelledby`, um einen zugänglichen Namen für ein Checkbox-Eingabefeld bereitzustellen, indem es den Textinhalt eines benachbarten Elements verwendet:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

> [!NOTE]
> {{htmlelement("span")}}-Elemente haben standardmäßig die [`generic` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) und können `aria-labelledby` nicht verwenden, es sei denn, sie geben auch eine Rolle an, die einen zugänglichen Namen bereitstellen kann.
> Hier tun wir das mit `role="checkbox"`.

Das Verwenden von `aria-labelledby` ist in dieser Situation ähnlich wie die Verwendung eines HTML-{{HTMLElement('label')}}-Elements mit dem `for`-Attribut, es gibt jedoch einige sehr wichtige Unterschiede. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet nicht die andere Funktionalität von `<label>`, wie z. B. das Aktivieren des Eingabefeldes durch Klicken auf das beschriftende Element. Dies muss mit JavaScript hinzugefügt werden.

Glücklicherweise funktioniert das HTML-{{HTMLElement('input')}} mit `type="checkbox"` nativ mit `<label>`. Wenn möglich, verwenden Sie das Folgende:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Seien Sie sich bewusst, dass sie andere Methoden zur Benennung des Elements überschreibt, einschließlich `aria-label`, anderer Benennungsattribute und sogar des Inhalts des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste, was bedeutet, dass Sie mehr als ein Element in einen einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements selbst einschließen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel ist der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der Werte bei `aria-labelledby` spielt eine Rolle. Wenn mehr als ein Element durch `aria-labelledby` referenziert wird, wird der Inhalt jedes referenzierten Elements in der Reihenfolge, in der sie im `aria-labelledby`-Wert referenziert werden, kombiniert. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more" gewesen.

4. Die `aria-labelledby`-Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur die erste Referenz verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird behandelt als `aria-labelledby="attr rm13">`

5. Der `aria-labelledby`-Eigenschaftswert kann Inhalte von Elementen einschließen, die nicht einmal sichtbar sind. Während Sie Benutzern von unterstützenden Technologien denselben Inhalt wie allen anderen Benutzern bereitstellen sollten, können Sie Inhalte von Elementen mit dem HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) und CSS [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility) in die berechnete Namenszeichenfolge aufnehmen.

6. Die `aria-labelledby`-Eigenschaft integriert den Wert von Eingabeelementen. Wenn der Wert auf ein `<input>` verweist, wird der aktuelle Wert des Formularelements in die berechnete Namenszeichenfolge aufgenommen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` ein anderes Element referenziert, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut des referenzierten Elements ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein kann und auf verborgene Inhalte verweisen kann, ist das Testen mit unterstützenden Technologien, um sicherzustellen, dass der erwartete Name den Benutzern präsentiert wird, sehr wichtig.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die auf die Elemente verweisen, welche das aktuelle Element beschriften.

## Zugehörige Schnittstellen

- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Die Eigenschaft `ariaLabelledByElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id`-Referenzen im `aria-labelledby`-Attribut reflektiert ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Die Eigenschaft `ariaLabelledByElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id`-Referenzen im `aria-labelledby`-Attribut reflektiert ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Verwendet in fast allen Rollen **außer** Rollen, die vom Autor keinen zugänglichen Namen erhalten können.

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
