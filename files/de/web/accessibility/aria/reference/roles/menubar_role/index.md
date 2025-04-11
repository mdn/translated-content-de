---
title: "ARIA: `menubar` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menubar_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Eine `menubar` ist eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und üblicherweise horizontal dargestellt wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie z. B. eine Reihe von Aktionen oder Funktionen. Der Typ Men ü bar wird normalerweise als dauerhaft sichtbare horizontale Befehlsleiste präsentiert. Men ü bars verhalten sich wie native Men ü bars des Betriebssystems, beispielsweise die Men ü bars mit Dropdown-Menüs, die häufig oben in vielen Desktop-Anwendungsfenstern zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste zu erstellen, die denjenigen ähnelt, die sich in der Nähe des oberen Fensters vieler Desktop-Anwendungen befindet, visuell beständig und typischerweise horizontal, als Leiste von Men ü punkten, die dem Benutzer schnellen Zugang zu einem konsistenten Satz von Befehlen bieten.

Eine `menubar` enthält drei Arten von Menüelementen, darunter [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role). Diese Menüelemente können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Containern verschachtelt werden. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) Elemente getrennt sein. Während jedes Menüelement den Fokus erhalten muss, selbst wenn es deaktiviert ist, sind die `group`- und `separator`-Elemente nicht fokussierbar.

Ein Beispiel für eine native Men ü bar ist die Leiste, die möglicherweise oben auf dem Bildschirm vorhanden ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für eine webbasierte Men ü bar ist die horizontale Menüleiste, die "Datei Bearbeiten Ansicht Einfügen Format" usw. liest, die normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Men ü bar-Interaktionen sollten ähnlich wie die typische Menüleisten-Interaktion in einer Desktop-Grafikbenutzeroberfläche sein. In Google Docs ist jedes dieser Men ü elemente ein `menuitem` mit einem Popup-Untermenü, sodass jedes das `aria-haspopup`-Attribut auf `true` gesetzt hat. Das `menubar`-Element hat dies nicht.

Die Men ü bar und alle Menüelemente sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut gesetzt. Wenn die Men ü bar durch Tabulatoren den Fokus erhält, wird der Tastaturfokus auf das erste `menuitem` gelegt. Jedes Element im Menü hat `tabindex` auf `-1` gesetzt, außer das erste Element, das `tabindex` auf `0` gesetzt hat.

Wenn eine Men ü bar als Ergebnis einer Kontextaktion, wie einer Tastenkombination, den Fokus erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückgeben. Das bedeutet, darauf zu achten, dass keine Tastenkombinationen erstellt werden, die mit Benutzeragenten-, Betriebssystem- oder assistierende Technologie-Kurzbefehle interferieren - einschließlich Benutzeragenten, OS oder AT.

Jedes Menüelement, egal wie tief verschachtelt, kann den Fokus erhalten, selbst wenn es deaktiviert ist.

Wenn eine `menubar` ein sichtbares Label hat, schließen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ein, das auf einen Wert gesetzt ist, der auf das Beschriftungselement verweist. Andernfalls geben Sie der Men ü bar einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) einfügen.

Ein `menuitem`-Element in der `menubar` kann ein untergeordnetes Untermenü von Menüelementen enthalten. Untermenüs können mehrmals tief verschachtelt sein. Im Allgemeinen ist die äußere `menubar` horizontal, und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, und Ihre Men ü bar vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) in das `menubar`-Element ein. Andernfalls ist dieses Attribut nicht erforderlich, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle
  - : Identifiziert ein Set von Menüelementen
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)-Rolle
  - : Eine Option in einem Set von Auswahlmöglichkeiten, das durch eine `menubar` enthalten ist. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)-Rolle
  - : Ein überprüfbares Menüelement in einem Set von Elementen mit derselben Rolle, von denen nur eines gleichzeitig überprüft sein kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)-Rolle
  - : Ein Menüelement mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` dem `menubar`-Element hinzu, wenn die Men ü bar vertikal ist. Die Standardausrichtung ist horizontal.

### Tastaturinteraktionen

Wenn der Fokus in einer `menubar` liegt, ist er stets auf ein Menüelement innerhalb der Menüleiste gerichtet. Wenn der Fokus auf einem übergeordneten `menuitem` in einer Menüleiste liegt, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeil nach unten</kbd>
  - : Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und legt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : (Optional) Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und legt den Fokus auf das _letzte_ Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Bewegt den Fokus zum nächsten Element, optional vom letzten zum ersten übergehend.
- <kbd>Pfeil nach links</kbd>
  - : Bewegt den Fokus zum vorherigen Element, optional vom ersten zum letzten übergehend.
- <kbd>Home</kbd>
  - : Wenn Pfeiltasten-Übergang nicht unterstützt wird, verschiebt den Fokus auf das erste Element in der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn Pfeiltasten-Übergang nicht unterstützt wird, verschiebt den Fokus auf das letzte Element in der `menubar`.
- <kbd>Tab</kbd>
  - : Bewegt den Fokus zum nächsten Element in der Tab-Reihenfolge. Wenn dies bewirkt, dass es die Men ü bar verlässt, werden alle Untermenüs der Men ü bar geschlossen.
- <kbd>Umschalt + Tab</kbd>
  - : Bewegt den Fokus zum vorherigen Element in der Tab-Reihenfolge. Wenn dies bewirkt, dass es die Men ü bar verlässt, werden alle Untermenüs der Men ü bar geschlossen.

Siehe [`menuitem`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions), [`menuitemradio`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role#keyboard_interactions) und [`menuitemcheckbox`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen zu Tastaturinteraktionen, wenn der Fokus auf einem `menuitem` in einer `menubar` liegt (was es immer ist).

> [!NOTE]
> Die obigen Interaktionen gehen davon aus, dass die `menubar` horizontal ist. Wenn die `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Pfeil nach unten</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach rechts</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach oben</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach links</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach rechts</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach unten</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach links</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach oben</kbd>, wie oben beschrieben.

## Beispiele

- [W3C WAI-ARIA Praktiken: Navigations `menubar` Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C WAI-ARIA Praktiken: Editor `menubar` Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
