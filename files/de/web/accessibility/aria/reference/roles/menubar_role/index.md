---
title: "ARIA: menubar Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menubar_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `menubar` ist eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und üblicherweise horizontal präsentiert wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie zum Beispiel eine Reihe von Aktionen oder Funktionen. Der Menübartyp des Menüs wird normalerweise als eine dauerhaft sichtbare horizontale Befehlsleiste präsentiert. Menübalken verhalten sich wie native Menübalken von Betriebssystemen, wie z.B. die Menübalken mit Dropdown-Menüs, die häufig am oberen Rand von Fenstern vieler Desktop-Anwendungen zu finden sind.

Die Rolle `menubar` wird verwendet, um eine Menüleiste zu erstellen, die denjenigen ähnlich ist, die sich in vielen Desktop-Anwendungen am oberen Rand des Fensters befinden, visuell persistent und typischerweise horizontal ist und eine Leiste von Menüelementen bietet, die dem Benutzer schnellen Zugriff auf eine konsistente Menge von Befehlen geben.

Ein `menubar` enthält drei Arten von Menüelementen, einschließlich [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role). Diese Menüelemente können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Containern verschachtelt sein. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Elemente getrennt werden. Während jedes Menüelement fokussierbar sein muss, auch wenn es deaktiviert ist, sind die Elemente `group` und `separator` nicht fokussierbar.

Ein Beispiel für einen nativen Menübalken ist die Leiste, die möglicherweise am oberen Bildschirmrand vorhanden ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für einen web-basierten Menübalken ist die horizontale Menüleiste mit "Datei Bearbeiten Ansicht Einfügen Format" etc., die normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menübalken-Interaktionen sollten den typischen Menüleisten-Interaktionen in einer Desktop-Grafikbenutzeroberfläche ähneln. In Google Docs ist jedes dieser Menüelemente ein `menuitem` mit einem Popup-Untermenü, sodass jedem das Attribut `aria-haspopup` auf `true` gesetzt ist. Das `menubar`-Element hat dies nicht.

Der Menübalken und alle Menüelemente sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut gesetzt. Wenn der Menübalken durch Tabben den Fokus erhält, wird der Tastaturfokus auf das erste `menuitem` platziert. Jedes Element im Menü hat `tabindex` auf `-1` gesetzt, außer das erste Element, das `tabindex` auf `0` gesetzt hat.

Wenn ein Menübalken den Fokus als Ergebnis einer Kontextaktion erhält, wie z.B. eine Tastenkombination, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückführen. Dennoch sollte darauf geachtet werden, keine Tastenkombinationen zu erstellen, die mit Benutzeragenten, Betriebssystemen oder unterstützenden Technologien in Konflikt stehen - jeder UA, OS oder AT.

Jedes Menüelement, egal wie tief verschachtelt, kann fokussiert werden, auch wenn es deaktiviert ist.

Wenn ein `menubar` ein sichtbares Label hat, fügen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hinzu, das auf ein Element verweist, das das Label beschreibt. Andernfalls geben Sie dem Menübalken einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzufügen.

Ein `menuitem`-Element im `menubar` kann ein untergeordnetes Untermenü von Menüelementen enthalten. Untermenüs können mehrfach verschachtelt werden. Im Allgemeinen ist der äußere `menubar` horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, wenn Ihr Menübalken vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) auf dem `menubar`-Element hinzu. Andernfalls ist dieses Attribut nicht notwendig, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von Menüelementen
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) Rolle
  - : Eine Option in einer Auswahlmenge, die von einem `menubar` enthalten ist. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rolle
  - : Ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt werden kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) Rolle
  - : Ein Menüelement mit einem auswählbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` auf dem `menubar`-Element hinzu, wenn der Menübalken vertikal ist. Die Standardorientierung ist `horizontal`.

### Tastaturinteraktionen

Wenn der Fokus in einem `menubar` ist, befindet er sich immer auf einem Menüelement innerhalb des Menübalkens. Wenn der Fokus auf einem `menuitem` der obersten Ebene in einem Menübalken liegt, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Nach-unten-Taste</kbd>
  - : Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf das erste Element im Untermenü.
- <kbd>Nach-oben-Taste</kbd>
  - : (Optional) Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf das _letzte_ Element im Untermenü.
- <kbd>Nach-rechts-Taste</kbd>
  - : Verschiebt den Fokus auf das nächste Element, optional mit Umbruch vom letzten zum ersten.
- <kbd>Nach-links-Taste</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional mit Umbruch vom ersten zum letzten.
- <kbd>Home</kbd>
  - : Wenn Pfeiltasten-Umbruch nicht unterstützt wird, verschiebt er den Fokus auf das erste Element im `menubar`.
- <kbd>Ende</kbd>
  - : Wenn Pfeiltasten-Umbruch nicht unterstützt wird, verschiebt er den Fokus auf das letzte Element im `menubar`.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tab-Reihenfolge. Wenn dies den Menübalken verlässt, werden alle Untermenüs im Menübalken geschlossen.
- <kbd>Shift + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tab-Reihenfolge. Wenn dies den Menübalken verlässt, werden alle Untermenüs im Menübalken geschlossen.

Siehe [Tastaturinteraktionen `menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions), [Tastaturinteraktionen `menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role#keyboard_interactions) und [Tastaturinteraktionen `menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen zu Tastaturinteraktionen, wenn der Fokus auf einem Menüelement in einem Menübalken liegt (was er immer ist).

Hinweis: Die obigen Interaktionen nehmen an, dass der `menubar` horizontal ist. Wenn der `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Nach-unten-Taste</kbd>
  - : Funktioniert wie die oben beschriebene <kbd>Nach-rechts-Taste</kbd>.
- <kbd>Nach-oben-Taste</kbd>
  - : Funktioniert wie die oben beschriebene <kbd>Nach-links-Taste</kbd>.
- <kbd>Nach-rechts-Taste</kbd>
  - : Funktioniert wie die oben beschriebene <kbd>Nach-unten-Taste</kbd>.
- <kbd>Nach-links-Taste</kbd>
  - : Funktioniert wie die oben beschriebene <kbd>Nach-oben-Taste</kbd>.

## Beispiele

- [W3C WAI-ARIA-Praktiken: Navigations-`menubar`-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C WAI-ARIA-Praktiken: Editor-`menubar`-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
