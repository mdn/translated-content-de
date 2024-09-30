---
title: "ARIA: menubar Rolle"
slug: Web/Accessibility/ARIA/Roles/menubar_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `menubar` ist eine Darstellung von `menu`, die normalerweise sichtbar bleibt und in der Regel horizontal angezeigt wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie z.B. eine Reihe von Aktionen oder Funktionen. Der Menüleistentyp von Menü wird normalerweise als dauerhaft sichtbare horizontale Befehlsleiste dargestellt. Menüleisten verhalten sich ähnlich wie native Betriebssystem-Menüleisten, wie die Menüleisten mit Dropdown-Menüs, die häufig oben in vielen Desktop-Anwendungsfenstern zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste ähnlich derjenigen zu erstellen, die sich oben im Fenster vieler Desktop-Anwendungen befindet, eine visuall persistente, typischerweise horizontale Leiste von Menüpunkten, die dem Benutzer schnellen Zugang zu einer konsistenten Reihe von Befehlen bietet.

Ein `menubar` enthält drei Arten von Menüpunkten, einschließlich [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role). Diese Menüpunkte können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Containern verschachtelt sein. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) Elemente getrennt werden. Während jeder Menüpunkt den Fokus erhalten muss, selbst wenn er deaktiviert ist, sind die `group` und `separator` Elemente nicht fokussierbar.

Ein Beispiel für eine native Menüleiste ist die Leiste, die möglicherweise oben auf dem Bildschirm vorhanden ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für eine webbasierte Menüleiste ist die horizontale Menüleiste, die "Datei Bearbeiten Anzeigen Einfügen Format" usw. liest, die normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menüleiste-Interaktionen sollten ähnlich der typischen Menüleisten-Interaktion in einer Desktop-Grafikbenutzeroberfläche sein. In Google Docs ist jeder dieser Menüpunkte ein `menuitem` mit einem Popup-Untermenü, daher hat jeder ein `aria-haspopup` Attribut, das auf `true` gesetzt ist. Das `menubar`-Element hat dies nicht.

Die Menüleiste und alle Menüpunkte sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut gesetzt. Wenn die Menüleiste durch Tabben den Fokus erhält, wird der Tastaturfokus auf den ersten Menüpunkt gesetzt. Jeder Punkt im Menü hat `tabindex` auf `-1` gesetzt, außer der erste Punkt, der sein `tabindex` auf `0` gesetzt hat.

Wenn eine Menüleiste als Ergebnis einer Kontextaktion, wie einer Tastenkombination, den Fokus erhält, können <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurücksetzen. Beachten Sie jedoch, dass keine Tastenkombinationen erstellt werden, die mit Benutzeragent-, Betriebssystem- oder Assistive-Technologieabkürzungen interferieren - jegliche UA, OS oder AT.

Jeder Menüpunkt, egal wie tief verschachtelt, kann den Fokus erhalten, selbst wenn er deaktiviert ist.

Wenn eine `menubar` ein sichtbares Label hat, fügen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) mit einem Wert hinzu, der auf das beschriftende Element verweist. Andernfalls geben Sie der Menüleiste einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) einschließen.

Ein `menuitem` Element in der `menubar` kann ein Kind-Untermenü von Menüpunkten enthalten. Untermenüs können mehrere Schichten tief verschachtelt sein. Im Allgemeinen ist die äußere `menubar` horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, z.B. wenn Ihre Menüleiste vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) auf dem `menubar` Element hinzu. Andernfalls ist dieses Attribut nicht erforderlich, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von Menüpunkten
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) Rolle
  - : Eine Option in einer Auswahlmenge, die von einer `menubar` enthalten wird. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rolle
  - : Ein ankreuzbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig aktiviert werden kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) Rolle
  - : Ein Menüpunkt mit einem ankreuzbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` auf dem `menubar` Element hinzu, wenn die Menüleiste vertikal ist. Die Standardausrichtung ist `horizontal`.

### Tastaturinteraktionen

Wenn der Fokus in einem `menubar` ist, liegt er immer auf einem Menüpunkt innerhalb der Menüleiste. Wenn der Fokus auf einem Menüpunkt der obersten Ebene in einer Menüleiste liegt, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeil nach unten</kbd>
  - : Wenn der aktuell fokussierte `menuitem` ein Untermenü hat, öffnet dieses und setzt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : (Optional) Wenn der aktuell fokussierte `menuitem` ein Untermenü hat, öffnet dieses und setzt den Fokus auf das _letzte_ Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Element, optional vom letzten zum ersten Element.
- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional vom ersten zum letzten Element.
- <kbd>Home</kbd>
  - : Wenn Pfeiltastenumbruch nicht unterstützt wird, verschiebt den Fokus auf das erste Element in der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn Pfeiltastenumbruch nicht unterstützt wird, verschiebt den Fokus auf das letzte Element in der `menubar`.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tabulatorreihenfolge. Wenn dadurch die Menüleiste verlassen wird, werden alle Untermenüs in der `menubar` geschlossen.
- <kbd>Shift + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tabulatorreihenfolge. Wenn dadurch die Menüleiste verlassen wird, werden alle Untermenüs in der `menubar` geschlossen.

Siehe [`menuitem` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role#keyboard_interactions), [`menuitemradio` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role#keyboard_interactions) und [`menuitemcheckbox` Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen zu Tastaturinteraktionen, wenn der Fokus auf einem Menüpunkt in einer `menubar` liegt (was er immer ist).

Hinweis: Die oben genannten Interaktionen setzen voraus, dass die `menubar` horizontal ist. Wenn die `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Pfeil nach unten</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach rechts</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach oben</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach links</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach rechts</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach unten</kbd>, wie oben beschrieben.
- <kbd>Pfeil nach links</kbd>
  - : Funktioniert wie der <kbd>Pfeil nach oben</kbd>, wie oben beschrieben.

## Beispiele

- [W3C WAI-ARIA Praktiken: Navigations-`menubar` Beispiel](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-1/menubar-1.html)
- [W3C WAI-ARIA Praktiken: Editor-`menubar` Beispiel](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-2/menubar-2.html)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
