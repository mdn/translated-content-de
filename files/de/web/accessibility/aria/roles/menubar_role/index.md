---
title: "ARIA: menubar-Rolle"
slug: Web/Accessibility/ARIA/Roles/menubar_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Eine `menubar` ist eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und normalerweise horizontal präsentiert wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie beispielsweise eine Reihe von Aktionen oder Funktionen. Der Menübalken-Typ eines Menüs wird normalerweise als dauerhaft sichtbarer horizontaler Balken von Befehlen dargestellt. Menübalken verhalten sich wie native Betriebssystem-Menübalken, wie die Menübalken mit Dropdown-Menüs, die häufig oben in den Fenstern vieler Desktop-Anwendungen zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste zu erstellen, die ähnlich wie diejenigen in vielen Desktop-Anwendungen in Fenstern in der Nähe des oberen Bereichs angezeigt wird, visuell persistent, typischerweise horizontal, bestehend aus Menüelementen, die dem Benutzer schnellen Zugriff auf eine konsistente Reihe von Befehlen bieten.

Eine `menubar` enthält drei Arten von Menüelementen, darunter [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role). Diese Menüelemente können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Containern geschachtelt sein. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)-Elemente getrennt werden. Während jedes Menüelement in der Lage sein muss, den Fokus zu erhalten, auch wenn es deaktiviert ist, sind die `group`- und `separator`-Elemente nicht fokussierbar.

Ein Beispiel für eine native Menüleiste ist die Leiste, die möglicherweise oben auf dem Bildschirm vorhanden ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für eine webbasierte Menüleiste ist die horizontale Menüleiste, die "Datei Bearbeiten Ansicht Einfügen Format" usw. liest, die normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menüleisten-Interaktionen sollten vergleichbar mit der typischen Menüleiste-Interaktion in einer Desktop-GUI sein. In Google Docs ist jedes dieser Menüelemente ein `menuitem` mit einem Popup-Untermenü, so dass jeder über ein `aria-haspopup`-Attribut verfügt, das auf `true` gesetzt ist. Das `menubar`-Element hat das nicht.

Die Menüleiste und alle Menüelemente sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut gesetzt. Wenn die Menüleiste über Tabulatorfokus erhält, wird der Tastaturfokus auf das erste Menüelement gesetzt. Jedes Element im Menü hat `tabindex` auf `-1` gesetzt, außer das erste Element, das `tabindex` auf `0` gesetzt hat.

Wenn eine Menüleiste den Fokus als Ergebnis einer Kontextaktion, wie einer Tastenkombination, erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurücksetzen. Stellen Sie dabei sicher, keine Tastenkombinationen zu erstellen, die mit Benutzeragenten, Betriebssystemen oder Hilfstechnologie-Kurzbefehlen in Konflikt geraten - jegliche UA, OS oder AT.

Jedes Menüelement, egal wie tief verschachtelt, kann den Fokus erhalten, selbst wenn es deaktiviert ist.

Falls eine `menubar` ein sichtbares Label hat, integrieren Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), das auf einen Wert verweist, der auf das beschriftende Element verweist. Andernfalls geben Sie der Menüleiste einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) einfügen.

Ein `menuitem`-Element in der `menubar` kann ein untergeordnetes Untermenü von Menüelementen enthalten. Untermenüs können mehrmals tief verschachtelt sein. Im Allgemeinen ist die äußere `menubar` horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, wenn Ihre Menüleiste vertikal ist, fügen Sie `aria-orientation="vertical"` auf dem `menubar`-Element ein. Andernfalls ist dieses Attribut nicht notwendig, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Kennzeichnet eine Gruppe von Menüelementen
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) Rolle
  - : Eine Option in einer Auswahlmenge, die von einer `menubar` enthalten wird. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rolle
  - : Ein aktivierbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig aktiviert sein kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) Rolle
  - : ein Menüelement mit einem aktivierbaren Status, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` auf dem `menubar`-Element ein, wenn die Menüleiste vertikal ist. Die Standardorientierung ist `horizontal`.

### Tastaturinteraktionen

Wenn sich der Fokus in einer `menubar` befindet, liegt er immer auf einem Menüelement innerhalb der Menüleiste. Wenn sich der Fokus auf einem obersten `menuitem` in einer Menüleiste befindet, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeiltaste nach unten</kbd>
  - : Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und setzt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeiltaste nach oben</kbd>
  - : (Optional) Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und setzt den Fokus auf das _letzte_ Element im Untermenü.
- <kbd>Pfeiltaste nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Element, optional vom letzten zum ersten Element wechselnd.
- <kbd>Pfeiltaste nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional vom ersten zum letzten Element wechselnd.
- <kbd>Home</kbd>
  - : Wenn das Wechseln der Pfeiltasten nicht unterstützt wird, verschiebt den Fokus auf das erste Element der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Wechseln der Pfeiltasten nicht unterstützt wird, verschiebt den Fokus auf das letzte Element der `menubar`.
- <kbd>Tabulator</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tab-Reihenfolge. Wenn dadurch die Menüleiste verlassen wird, werden alle Untermenüs in der Menüleiste geschlossen.
- <kbd>Umschalt + Tabulator</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tab-Reihenfolge. Wenn dadurch die Menüleiste verlassen wird, werden alle Untermenüs in der Menüleiste geschlossen.

Siehe [`menuitem`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role#keyboard_interactions), [`menuitemradio`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role#keyboard_interactions), und [`menuitemcheckbox`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen zu Tastaturinteraktionen, wenn der Fokus auf einem Menüelement in einer Menüleiste liegt (wo er immer ist).

Hinweis: Die obigen Interaktionen gehen davon aus, dass die `menubar` horizontal ist. Wenn die `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` ein und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Pfeiltaste nach unten</kbd>
  - : Entspricht der <kbd>Pfeiltaste nach rechts</kbd>, wie oben beschrieben.
- <kbd>Pfeiltaste nach oben</kbd>
  - : Entspricht der <kbd>Pfeiltaste nach links</kbd>, wie oben beschrieben.
- <kbd>Pfeiltaste nach rechts</kbd>
  - : Entspricht der <kbd>Pfeiltaste nach unten</kbd>, wie oben beschrieben.
- <kbd>Pfeiltaste nach links</kbd>
  - : Entspricht der <kbd>Pfeiltaste nach oben</kbd>, wie oben beschrieben.

## Beispiele

- [W3C WAI-ARIA-Praktiken: Beispiel für eine navigations-`menubar`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-1/menubar-1.html)
- [W3C WAI-ARIA-Praktiken: Beispiel für einen Editor-`menubar`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-2/menubar-2.html)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
