---
title: "ARIA: Rolle der Menuleiste"
short-title: menubar
slug: Web/Accessibility/ARIA/Reference/Roles/menubar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Eine `menubar` ist eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und normalerweise horizontal präsentiert wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie z.B. eine Reihe von Aktionen oder Funktionen. Die Menuleistentypen von Menüs werden normalerweise als dauerhaft sichtbare horizontale Leiste mit Befehlen präsentiert. Menuleisten verhalten sich ähnlich wie native Betriebssystem-Menuleisten, wie z.B. Menuleisten mit Dropdown-Menüs, die häufig oben in vielen Desktop-Anwendungsfenstern zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste zu erstellen, die ähnlich wie die in vielen Desktop-Anwendungen nahe der Oberseite des Fensters zu finden ist, optisch persistent ist, typischerweise horizontal, und dem Benutzer schnellen Zugriff auf eine konsistente Reihe von Befehlen bietet.

Eine `menubar` enthält drei Arten von Menüpunkten, einschließlich [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role). Diese Menüpunkte können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Container verschachtelt sein. Gruppen oder Elemente können optional mit [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Elementen getrennt werden. Während jeder Menüpunkt fokussierbar sein muss, selbst wenn er deaktiviert ist, sind die `group`- und `separator`-Elemente nicht fokussierbar.

Ein Beispiel für eine native Menuleiste ist die Leiste, die möglicherweise oben auf dem Bildschirm vorhanden ist, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für eine webbasierte Menuleiste ist die horizontale Menüleiste, die "Datei Bearbeiten Ansicht Einfügen Format" usw. liest, die gewöhnlich unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menuleisten-Interaktionen sollten der typischen Menuleisten-Interaktion in einer Desktop-Grafikoberfläche ähnlich sein. In Google Docs ist jeder dieser Menüpunkte ein `menuitem` mit einem Popup-Untermenü, sodass jeder das `aria-haspopup`-Attribut auf `true` gesetzt hat. Das `menubar`-Element selbst nicht.

Die Menuleiste und alle Menüpunkte sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut gesetzt. Wenn die Menuleiste durch Tabbing fokussiert wird, wird der Tastaturfokus auf den ersten Menüpunkt gesetzt. Jeder Punkt im Menü hat `tabindex` auf `-1` gesetzt, außer der erste Punkt, der `tabindex` auf `0` gesetzt hat.

Wenn eine Menuleiste durch eine Kontextaktion, wie z.B. eine Tastenkombination, fokussiert wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückbringen. Achten Sie darauf, keine Tastenkombinationen zu erstellen, die mit Benutzeragenten-, Betriebssystem- oder unterstützenden Technologie-Kurzbefehlen interferieren - jeder UA, OS oder AT.

Jeder Menüpunkt, egal wie tief verschachtelt, ist fokussierbar, selbst wenn er deaktiviert ist.

Wenn eine `menubar` ein sichtbares Label hat, fügen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hinzu, das auf einen Wert setzt, der auf das beschriftende Element verweist. Andernfalls geben Sie der Menuleiste einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzufügen.

Ein `menuitem`-Element in der `menubar` kann ein Untermenü mit Menüpunkten beinhalten. Untermenüs können mehrere Ebenen tief verschachtelt werden. Im Allgemeinen ist die äußere `menubar` horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, und Ihre Menuleiste vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) dem `menubar`-Element hinzu. Andernfalls ist dieses Attribut nicht notwendig, da der Standardwert horizontal ist.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von Menüelementen
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) Rolle
  - : Eine Option in einer Reihe von Auswahlmöglichkeiten, die von einer `menubar` enthalten werden. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rolle
  - : Ein auswählbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen nur eines gleichzeitig ausgewählt werden kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) Rolle
  - : Ein Menüelement mit einem auswählbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` dem `menubar`-Element hinzu, wenn es vertikal ist. Die Standardausrichtung ist `horizontal`.

### Tastatur-Interaktionen

Wenn der Fokus in einer `menubar` liegt, befindet er sich immer auf einem Menüelement innerhalb der Leiste. Wenn der Fokus auf einem obersten `menuitem` in einer Menuleiste liegt, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeiltaste nach unten</kbd>
  - : Öffnet das Untermenü, wenn das derzeit fokussierte `menuitem` ein solches hat, und setzt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeiltaste nach oben</kbd>
  - : (Optional) Öffnet das Untermenü, wenn das derzeit fokussierte `menuitem` ein solches hat, und setzt den Fokus auf das _letzte_ Element im Untermenü.
- <kbd>Pfeiltaste nach rechts</kbd>
  - : Verschiebt den Fokus zum nächsten Element, optional vom letzten zum ersten Element wiederholend.
- <kbd>Pfeiltaste nach links</kbd>
  - : Verschiebt den Fokus zum vorherigen Element, optional vom ersten zum letzten Element wiederholend.
- <kbd>Home</kbd>
  - : Wenn eine Pfeiltasten-Wiederholung nicht unterstützt wird, verschiebt den Fokus zum ersten Element in der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn eine Pfeiltasten-Wiederholung nicht unterstützt wird, verschiebt den Fokus zum letzten Element in der `menubar`.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus zum nächsten Element in der Tab-Reihenfolge. Wenn dies die Menuleiste verlässt, werden alle Untermenüs in der Menuleiste geschlossen.
- <kbd>Shift + Tab</kbd>
  - : Verschiebt den Fokus zum vorherigen Element in der Tab-Reihenfolge. Wenn dies die Menuleiste verlässt, werden alle Untermenüs in der Menuleiste geschlossen.

Siehe [`menuitem` Tastatur-Interaktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions), [`menuitemradio` Tastatur-Interaktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role#keyboard_interactions) und [`menuitemcheckbox` Tastatur-Interaktionen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role#keyboard_interactions) für weitere Informationen zu Tastaturinteraktionen, wenn der Fokus auf einem Menüelement in einer Menuleiste liegt (was er immer ist).

Hinweis: Die obigen Interaktionen setzen voraus, dass die `menubar` horizontal ist. Wenn die `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturbefehle entsprechend:

- <kbd>Pfeiltaste nach unten</kbd>
  - : Funktioniert wie die <kbd>Pfeiltaste nach rechts</kbd>, wie oben beschrieben.
- <kbd>Pfeiltaste nach oben</kbd>
  - : Funktioniert wie die <kbd>Pfeiltaste nach links</kbd>, wie oben beschrieben.
- <kbd>Pfeiltaste nach rechts</kbd>
  - : Funktioniert wie die <kbd>Pfeiltaste nach unten</kbd>, wie oben beschrieben.
- <kbd>Pfeiltaste nach links</kbd>
  - : Funktioniert wie die <kbd>Pfeiltaste nach oben</kbd>, wie oben beschrieben.

## Beispiele

- [W3C WAI-ARIA Praktiken: Navigation `menubar` Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C WAI-ARIA Praktiken: Editor `menubar` Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
