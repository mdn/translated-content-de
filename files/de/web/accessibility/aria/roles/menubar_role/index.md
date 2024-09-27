---
title: "ARIA: menubar Rolle"
slug: Web/Accessibility/ARIA/Roles/menubar_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `menubar` ist eine Darstellung eines `menu`, das in der Regel sichtbar bleibt und normalerweise horizontal dargestellt wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, z. B. eine Reihe von Aktionen oder Funktionen. Die Menütart vom Typ Menubar wird normalerweise als eine dauerhaft sichtbare horizontale Befehlsleiste dargestellt. Menubars verhalten sich wie native Betriebssystem-Menubars, wie die Menubars, die Pull-Down-Menüs enthalten und häufig oben in vielen Desktop-Anwendungsfenstern zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste zu erstellen, die denjenigen ähnelt, die sich in vielen Desktop-Anwendungen in der Nähe des oberen Fensterrandes befinden, visuell persistent ist und typischerweise horizontal ausgerichtet ist. Sie bietet dem Benutzer schnellen Zugriff auf eine konsistente Auswahl an Befehlen.

Ein `menubar` enthält drei Arten von Menüelementen, einschließlich [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role). Diese Menüelemente können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Containern genistet werden. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) Elemente getrennt werden. Während jedes Menüelement den Fokus erhalten können muss, auch wenn es deaktiviert ist, sind die Elemente `group` und `separator` nicht fokussierbar.

Ein Beispiel für eine native Menüleiste ist die Leiste, die möglicherweise am oberen Bildschirmrand sichtbar ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für eine webbasierte Menüleiste ist die horizontale Menüleiste, die "Datei Bearbeiten Ansicht Einfügen Format" usw. liest und normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menüleisten-Interaktionen sollten den typischen Menüleisten-Interaktionen in einer Desktop-Grafikschnittstelle ähneln. In Google Docs ist jedes dieser Menüelemente ein `menuitem` mit einem Popup-Untermenü, sodass jedes ein `aria-haspopup`-Attribut hat, das auf `true` gesetzt ist. Das `menubar`-Element hat dies nicht.

Die Menüleiste und alle Menüelemente sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut gesetzt. Wenn die Menüleiste den Fokus durch Tabben erhält, wird der Tastaturfokus auf das erste Menüelement gesetzt. Jedes Element im Menü hat `tabindex` auf `-1` gesetzt, außer das erste Element, das sein `tabindex` auf `0` gesetzt hat.

Wenn eine Menüleiste durch eine Kontextaktion, wie eine Tastenkombination, den Fokus erhält, können <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus wieder auf den aufrufenden Kontext zurücksetzen. Achten Sie darauf, keine Tastenkombinationen zu erstellen, die mit Benutzeragenten-, Betriebssystem- oder Assistenztechnologie-Kurzbefehlen interferieren.

Jedes Menüelement, unabhängig davon, wie tief es genistet ist, kann den Fokus erhalten, auch wenn es deaktiviert ist.

Wenn ein `menubar` ein sichtbares Label hat, fügen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) hinzu, das auf einen Wert gesetzt ist, der auf das auszeichnende Element verweist. Andernfalls geben Sie der Menüleiste einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) hinzufügen.

Ein `menuitem`-Element in der `menubar` kann ein untergeordnetes Untermenü von Menüelementen enthalten. Untermenüs können mehrmals geschachtelt werden. Im Allgemeinen ist die äußere `menubar` horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, wenn Ihre Menüleiste vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) dem `menubar`-Element hinzu. Andernfalls ist dieses Attribut nicht notwendig, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Kennzeichnet eine Gruppe von Menüelementen
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) Rolle
  - : Eine Option in einem Satz von Auswahlmöglichkeiten, die von einer `menubar` enthalten sind. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rolle
  - : Ein auswählbares Menüelement in einem Satz von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt sein kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) Rolle
  - : Ein Menüelement mit einem auswählbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` dem `menubar`-Element hinzu, wenn die Menüleiste vertikal ist. Die Standardausrichtung ist `horizontal`.

### Tastaturinteraktionen

Wenn der Fokus auf einer `menubar` liegt, ist er immer auf einem Menüelement innerhalb der Menüleiste. Wenn der Fokus auf einem obersten `menuitem` in einer Menüleiste liegt, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeil nach unten</kbd>
  - : Wenn das derzeit fokussierte `menuitem` ein Untermenü hat, öffnet das Untermenü und platziert den Fokus auf dem ersten Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : (Optional) Wenn das derzeit fokussierte `menuitem` ein Untermenü hat, öffnet das Untermenü und platziert den Fokus auf dem _letzten_ Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Element, optional vom letzten zum ersten Element umschaltend.
- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional vom ersten zum letzten Element umschaltend.
- <kbd>Home</kbd>
  - : Wenn das Umschalten der Pfeiltasten nicht unterstützt wird, verschiebt den Fokus auf das erste Element in der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Umschalten der Pfeiltasten nicht unterstützt wird, verschiebt den Fokus auf das letzte Element in der `menubar`.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tabulatorreihenfolge. Wenn dies die Menüleiste verlässt, werden alle Untermenüs in der Menüleiste geschlossen.
- <kbd>Umschalt + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tabulatorreihenfolge. Wenn dies die Menüleiste verlässt, werden alle Untermenüs in der Menüleiste geschlossen.

Siehe [`menuitem` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role#keyboard_interactions), [`menuitemradio` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role#keyboard_interactions) und [`menuitemcheckbox` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen über Tastaturinteraktionen, wenn der Fokus auf einem Menüelement in einer Menüleiste ist (was immer der Fall ist).

Hinweis: Die obigen Interaktionen gehen davon aus, dass die `menubar` horizontal ist. Wenn die `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Pfeil nach unten</kbd>
  - : Führt die Funktion des <kbd>Pfeil nach rechts</kbd> wie oben beschrieben aus.
- <kbd>Pfeil nach oben</kbd>
  - : Führt die Funktion des <kbd>Pfeil nach links</kbd> wie oben beschrieben aus
- <kbd>Pfeil nach rechts</kbd>
  - : Führt die Funktion des <kbd>Pfeil nach unten</kbd> wie oben beschrieben aus.
- <kbd>Pfeil nach links</kbd>
  - : Führt die Funktion des <kbd>Pfeil nach oben</kbd> wie oben beschrieben aus.

## Beispiele

- [W3C WAI-ARIA-Praktiken: Beispiel für ein Navigations-`menubar`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-1/menubar-1.html)
- [W3C WAI-ARIA-Praktiken: Beispiel für ein Editor-`menubar`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-2/menubar-2.html)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
