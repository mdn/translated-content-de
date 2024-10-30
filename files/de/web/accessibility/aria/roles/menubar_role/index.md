---
title: "ARIA: menubar Rolle"
slug: Web/Accessibility/ARIA/Roles/menubar_role
l10n:
  sourceCommit: 58ffb2cb2a05105f1a5eaa5c659782a85f7a4606
---

{{AccessibilitySidebar}}

Ein `menubar` ist eine Darstellung von `menu`, die normalerweise sichtbar bleibt und normalerweise horizontal präsentiert wird.

## Beschreibung

Ein Menü ist ein Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet, wie eine Reihe von Aktionen oder Funktionen. Der `menubar`-Typ des Menüs wird normalerweise als eine dauerhaft sichtbare horizontale Befehlsleiste präsentiert. Menübalken verhalten sich wie native Menübalken von Betriebssystemen, wie die Menübalken mit Aufklappmenüs, die häufig oben in vielen Desktop-Anwendungsfenstern zu finden sind.

Die `menubar`-Rolle wird verwendet, um eine Menüleiste zu erstellen, die denjenigen ähnelt, die sich in der Nähe des Fensters oben in vielen Desktop-Anwendungen befindet. Sie ist visuell beständig, typischerweise horizontal und bietet Benutzern schnellen Zugriff auf einen konsistenten Satz von Befehlen.

Ein `menubar` enthält drei Arten von Menüelementen, einschließlich [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role). Diese Menüelemente können optional in einem oder mehreren [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Containern verschachtelt sein. Gruppen oder Elemente können optional durch [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)-Elemente getrennt sein. Jedes Menüpunktelement muss den Fokus erhalten können, auch wenn es deaktiviert ist. Die `group`- und `separator`-Elemente sind jedoch nicht fokussierbar.

Ein Beispiel für einen nativen Menübalken ist der Balken, der möglicherweise oben auf dem Bildschirm erscheint, wenn Sie dies in einem Desktop-Browser lesen. Ein Beispiel für einen webbasierten Menübalken ist die horizontale Menüleiste, die "Datei Bearbeiten Ansicht Einfügen Format" usw. liest, die normalerweise unter dem Dokumentnamen in einem Google-Dokument sichtbar ist.

Menübalken-Interaktionen sollten ähnlich den typischen Menübalken-Interaktionen in einer grafischen Benutzeroberfläche eines Desktops sein. In Google Docs ist jedes dieser Menüpunkte ein `menuitem` mit einem aufklappbaren Untermenü, daher ist jedes mit einem `aria-haspopup`-Attribut versehen, das auf `true` gesetzt ist. Das `menubar`-Element selbst nicht.

Der Menübalken und alle Menüpunkte sind fokussierbar und haben ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut gesetzt. Wenn der Menübalken den Fokus durch Tabbing erhält, wird der Tastaturfokus auf das erste Menüpunktelement platziert. Jedes Element im Menü hat `tabindex` auf `-1` gesetzt, außer das erste Element, welches `tabindex` auf `0` gesetzt hat.

Wenn ein Menübalken als Ergebnis einer Kontextaktion, wie einer Tastenkombination, den Fokus erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus zum auslösenden Kontext zurückbringen. Achten Sie jedoch darauf, keine Tastenkombinationen zu erstellen, die mit Benutzeragenten, Betriebssystemen oder Hilfstechniken in Konflikt stehen - mit jedem UA, OS oder AT.

Jedes Menüelement, egal wie tief verschachtelt, kann den Fokus erhalten, auch wenn es deaktiviert ist.

Wenn ein `menubar` ein sichtbares Label hat, fügen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) hinzu und setzen Sie es auf einen Wert, der das beschreibende Element referenziert. Andernfalls geben Sie dem Menübalken einen zugänglichen Namen, indem Sie ein beschreibendes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) hinzufügen.

Ein `menuitem`-Element in der `menubar` kann ein Kind-Untermenü von Menüpunkten enthalten. Untermenüs können mehrfach tief verschachtelt sein. Allgemein ist der äußere Menübalken horizontal und alle Untermenüs sind vertikal. Wenn dies nicht der Fall ist, und Ihr Menübalken vertikal ist, fügen Sie [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) dem `menubar`-Element hinzu. Andernfalls ist dieses Attribut nicht erforderlich, da der Standardwert horizontal ist.

### Verwandte WAI-ARIA Rollen, Zustände und Eigenschaften

- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Identifiziert eine Gruppe von Menüpunkten
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) Rolle
  - : Eine Option in einem Satz von Auswahlmöglichkeiten, die von einem `menubar` enthalten sind. Kann ein Untermenü haben.
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rolle
  - : Ein aktivierbares Menüelement in einer Gruppe von Elementen mit derselben Rolle, von denen immer nur eines aktiv sein kann.
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) Rolle
  - : ein Menüelement mit einem aktivierbaren Zustand, dessen mögliche Werte `true`, `false` oder `mixed` sind.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Fügen Sie `aria-orientation="vertical"` zum `menubar`-Element hinzu, wenn es sich um einen vertikalen Menübalken handelt. Die Standardorientierung ist `horizontal`.

### Tastaturinteraktionen

Wenn sich der Fokus in einem `menubar` befindet, liegt er immer auf einem Menüpunktelement innerhalb des Menübalkens. Wenn der Fokus auf einem obersten `menuitem` in einem Menübalken liegt, müssen die folgenden Tastaturinteraktionen unterstützt werden:

- <kbd>Pfeil nach unten</kbd>
  - : Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, wird das Untermenü geöffnet und der Fokus auf das erste Element des Untermenüs gelegt.
- <kbd>Pfeil nach oben</kbd>
  - : (Optional) Wenn das aktuell fokussierte `menuitem` ein Untermenü hat, wird das Untermenü geöffnet und der Fokus auf das _letzte_ Element des Untermenüs gelegt.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Element, optional von der letzten zur ersten umschaltend.
- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional von der ersten zur letzten umschaltend.
- <kbd>Home</kbd>
  - : Wenn das Umschalten mit Pfeiltasten nicht unterstützt wird, bewegt sich der Fokus auf das erste Element in der `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Umschalten mit Pfeiltasten nicht unterstützt wird, verschiebt sich der Fokus auf das letzte Element in der `menubar`.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tab-Reihenfolge. Falls das dazu führt, dass der Menübalken verlassen wird, werden alle Untermenüs im Menübalken geschlossen.
- <kbd>shift + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tab-Reihenfolge. Falls das dazu führt, dass der Menübalken verlassen wird, werden alle Untermenüs im Menübalken geschlossen.

Sehen Sie die [`menuitem`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role#keyboard_interactions), [`menuitemradio`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role#keyboard_interactions) und [`menuitemcheckbox`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions) für mehr Informationen zu Tastaturinteraktionen, wenn der Fokus auf einem Menüpunktelement in einem `menubar` liegt (was er immer tut).

Hinweis: Die oben beschriebenen Interaktionen gehen davon aus, dass der `menubar` horizontal ist. Wenn der `menubar` vertikal ist, fügen Sie `aria-orientation="vertical"` hinzu und ändern Sie die folgenden Tastaturtasten entsprechend:

- <kbd>Pfeil nach unten</kbd>
  - : Verhält sich wie der <kbd>Pfeil nach rechts</kbd> wie oben beschrieben.
- <kbd>Pfeil nach oben</kbd>
  - : Verhält sich wie der <kbd>Pfeil nach links</kbd> wie oben beschrieben.
- <kbd>Pfeil nach rechts</kbd>
  - : Verhält sich wie der <kbd>Pfeil nach unten</kbd> wie oben beschrieben.
- <kbd>Pfeil nach links</kbd>
  - : Verhält sich wie der <kbd>Pfeil nach oben</kbd> wie oben beschrieben.

## Beispiele

- [W3C WAI-ARIA Praktiken: Navigations-Menübalken Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C WAI-ARIA Praktiken: Editor-Menübalken Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
