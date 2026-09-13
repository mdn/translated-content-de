---
title: "ARIA: menubar-Rolle"
short-title: menubar
slug: Web/Accessibility/ARIA/Reference/Roles/menubar_role
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Ein `menubar` ist eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und typischerweise horizontal präsentiert wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie z.B. eine Reihe von Aktionen oder Funktionen. Der Menübartyp eines Menüs wird normalerweise als dauerhaft sichtbare horizontale Leiste von Befehlen dargestellt. Menübalken verhalten sich wie native Betriebssystem-Menübalken, wie die Menübalken mit Pull-Down-Menüs, die häufig oben in vielen Desktop-Anwendungsfenstern zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste zu erstellen, die denen ähnelt, die sich in vielen Desktop-Anwendungen oberhalb des Fensters befinden, optisch dauerhaft, typischerweise horizontal, eine Leiste von Menüelementen, die dem Benutzer schnellen Zugriff auf eine konsistente Reihe von Befehlen bietet.

Ein `menubar` enthält drei Typen von Menüelementen, einschließlich [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role). Diese Menüelemente können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Containern verschachtelt sein. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Elemente getrennt werden. Während jedes Menüelement den Fokus empfangen können muss, selbst wenn es deaktiviert ist, sind die `group`- und `separator`-Elemente nicht fokusierbar.

Ein Beispiel für eine native Menüleiste ist die Leiste, die möglicherweise oben auf dem Bildschirm vorhanden ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für eine webbasierte Menüleiste ist die horizontale Menüleiste, die "Datei Bearbeiten Ansicht Einfügen Format" usw. liest und die normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menüleiste-Interaktionen sollten ähnlich wie die typischen Menüleiste-Interaktionen in einer Desktop-GUI sein. In Google Docs ist jedes dieser Menüelemente ein `menuitem` mit einem Popup-Untermenü, daher hat jedes das Attribut `aria-haspopup` auf `true` gesetzt. Das `menubar`-Element hat dies nicht.

Die Menüleiste und alle Menüelemente sind fokusierbar und haben ein [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut gesetzt. Wenn die Menüleiste den Fokus durch Tabben erhält, wird der Tastaturfokus auf das erste Menüelement gesetzt. Jedes Element im Menü hat `tabindex` auf `-1` gesetzt, mit Ausnahme des ersten Elements, das seinen `tabindex` auf `0` gesetzt hat.

Wenn eine Menüleiste den Fokus als Ergebnis einer Kontextaktion erhält, beispielsweise durch eine Tastenkombination, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurücksetzen. Stellen Sie dabei sicher, dass keine Tastenkombinationen erstellt werden, die mit Benutzeragent, Betriebssystem oder assistiven Technologien in Konflikt geraten - also mit einem UA, OS oder AT.

Jedes Menüelement, egal wie tief verschachtelt, kann den Fokus empfangen, selbst wenn es deaktiviert ist.

Wenn ein `menubar` ein sichtbares Etikett hat, fügen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hinzu, das auf einen Wert gesetzt ist, der auf das Etikettierungselement verweist. Andernfalls geben Sie der Menüleiste einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzufügen.

Ein `menuitem`-Element in der `menubar` kann ein Untermenü von Menüelementen enthalten. Untermenüs können mehrere Ebenen tief verschachtelt werden. Im Allgemeinen ist die äußere `menubar` horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, wenn Ihre Menüleiste vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) dem `menubar`-Element hinzu. Andernfalls ist dieses Attribut nicht notwendig, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von Menüelementen
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) Rolle
  - : Eine Option in einem Satz von Auswahlmöglichkeiten, die von einer `menubar` enthalten sind. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rolle
  - : Ein überprüfbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig überprüft sein kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) Rolle
  - : Ein Menüelement mit einem überprüfbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` dem `menubar`-Element hinzu, wenn es sich bei der Menüleiste um eine vertikale handelt. Die Standardausrichtung ist `horizontal`.

### Tastaturinteraktionen

Wenn sich der Fokus in einer `menubar` befindet, liegt er immer auf einem Menüelement innerhalb der Menüleiste. Wenn sich der Fokus auf einem obersten `menuitem` in einer Menüleiste befindet, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeil nach unten</kbd>
  - : Wenn das derzeit fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : (Optional) Wenn das derzeit fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf das _letzte_ Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Element, optional von letzter zu erster umschaltend.
- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional von erster zu letzter umschaltend.
- <kbd>Start</kbd>
  - : Wenn das Umschalten mit Pfeiltasten nicht unterstützt wird, verschiebt es den Fokus auf das erste Element in der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Umschalten mit Pfeiltasten nicht unterstützt wird, verschiebt es den Fokus auf das letzte Element in der `menubar`.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tabulator-Reihenfolge. Wenn dadurch die Menüleiste verlassen wird, werden alle Untermenüs in der Menüleiste geschlossen.
- <kbd>Umschalt + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tabulator-Reihenfolge. Wenn dadurch die Menüleiste verlassen wird, werden alle Untermenüs in der Menüleiste geschlossen.

Siehe [`menuitem` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions), [`menuitemradio` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role#keyboard_interactions), und [`menuitemcheckbox` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen zu Tastaturinteraktionen, wenn der Fokus auf ein Menüelement in einer Menüleiste gerichtet ist (was er immer ist).

Hinweis: Die obigen Interaktionen setzen voraus, dass die `menubar` horizontal ist. Wenn die `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Pfeil nach unten</kbd>
  - : Verhält sich ähnlich wie der <kbd>Pfeil nach rechts</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach oben</kbd>
  - : Verhält sich ähnlich wie der <kbd>Pfeil nach links</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach rechts</kbd>
  - : Verhält sich ähnlich wie der <kbd>Pfeil nach unten</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach links</kbd>
  - : Verhält sich ähnlich wie der <kbd>Pfeil nach oben</kbd>, wie oben beschrieben.

## Beispiele

- [W3C WAI-ARIA Practices: Navigations `menubar` Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C WAI-ARIA Practices: Editor `menubar` Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
