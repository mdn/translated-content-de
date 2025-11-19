---
title: Pseudo-Klassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Zustand des ausgewählten Elements zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Nutzers über den Button schwebt. Dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z.B. `:dir()`). Das Element, an dem eine Pseudo-Klasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentbaums, sondern auch in Bezug auf externe Faktoren wie die Navigationshistorie (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, wodurch Sie wissen, ob die Maus über einem Element ist oder nicht) einen Stil zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Entspricht jedem definierten Element.
- {{CSSxRef(":heading")}}
  - : Entspricht jedem Überschriftselement (`<h1>`-`<h6>`).

## Anzeigezustands-Pseudo-Klassen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Entspricht einem Element, das entweder offen oder geschlossen sein kann und sich derzeit im geöffneten Zustand befindet.
- {{CSSxRef(":popover-open")}}
  - : Entspricht einem Popover-Element, das sich derzeit im angezeigten Zustand befindet.
- {{CSSxRef(":modal")}}
  - : Entspricht einem Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb davon ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Entspricht einem Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Entspricht einem Element, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert ein beliebiges Element, das vom Nutzer nicht verändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert ein beliebiges Element, das vom Nutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Entspricht einem Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird es das `placeholder`-Attribut bei den Elementen {{htmlelement("input")}} und {{htmlelement("textarea")}} entsprechen.
- {{CSSxRef(":autofill")}}
  - : Entspricht, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Entspricht einem oder mehreren UI-Elementen, die die Standardeinstellung unter einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Entspricht, wenn Elemente wie Kontrollkästchen und Optionsbuttons aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Entspricht UI-Elementen, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Entspricht einem Benutzereingabe-Element, das leer ist, einen leeren String oder andere null-Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Entspricht einem Element mit gültigen Inhalten. Zum Beispiel ein Eingabeelement vom Typ 'email', das eine gültig geformte E-Mail-Adresse oder einen leeren Wert enthält, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Entspricht einem Element mit ungültigen Inhalten. Zum Beispiel ein Eingabeelement vom Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Entspricht, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Entspricht, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Nutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Nutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Sprache des Dokuments wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schriftlaufrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtungsanweisung aus, wie durch die Sprache des Dokuments bestimmt.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählen Sie ein Element basierend auf seiner Inhaltssprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente im aktuellen Dokument.

- {{CSSxRef(":any-link")}}
  - : Entspricht einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Entspricht Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Entspricht Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Entspricht Links, deren absolute URL identisch mit der Ziel-URL ist. Zum Beispiel Anker-Links zur selben Seite.
- {{CSSxRef(":target")}}
  - : Entspricht dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Referenzpunkt für Selektoren sind, um gegen sie zu passen.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente zu entsprechen, die oder deren Nachfahren das Ziel der Dokument-URL sind, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, in dem sie als abspielend beschrieben werden würden, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das gerade abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das derzeit eine Wiedergabeposition in der Mediendatei sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber vorübergehend gestoppt ist, weil es die Mediendatei herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber angehalten ist, weil es die Mediendatei nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein geräuscherzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein geräuscherzeugendes Element, dessen Lautstärkepegel vom Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Betrachten von etwas, das zeitlich gesteuert ist, wie ein [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitel-Track.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}} Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}} Element auftritt.

## Baumstrukturale Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Standort eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>` Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder, außer Leerzeichen-Zeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, wobei von hinten nach vorne gezählt wird.
- {{CSSxRef(":first-child")}}
  - : Entspricht einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Entspricht einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Entspricht einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne weitere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B` Notation, um Überschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen und rückwärts von hinten gezählt werden.
- {{CSSxRef(":first-of-type")}}
  - : Entspricht einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Entspricht einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Entspricht einem Element, das keine Geschwister des gewählten Typ-Selektors hat.

## Schattenstrukturale Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Schatten-DOM.

- {{CSSxRef(":host")}}
  - : Entspricht dem Schatten-Host des Schattenbaums.
- {{CSSxRef(":host_function", ":host()")}}
  - : Entspricht einem Element, das {{CSSxRef(":host")}} entspricht und einem der Selektoren in der bereitgestellten Liste entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schatten-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Entspricht Schlitz-Elementen, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden können, wie z.B. das Halten eines Mauszeigers über ein Element.

- {{CSSxRef(":hover")}}
  - : Entspricht, wenn ein Benutzer ein Element mit einem Zeigegerät kennzeichnet, wie das Halten des Mauszeigers über das Element.
- {{CSSxRef(":active")}}
  - : Entspricht, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Entspricht, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Entspricht, wenn ein Element den Fokus hat und der Benutzeragent identifiziert, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Entspricht einem Element, auf das {{CSSxRef(":focus")}} angewendet wird, plus jedem Element, das einen Nachfahren hat, auf den {{CSSxRef(":focus")}} angewendet wird.
- {{CSSxRef(":target-current")}}
  - : Entspricht dem {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, zu der aktuell gescrollt wird, in anderen Worten, dem **aktiven** Scroll-Marker.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [nachgiebige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Matches-Any Pseudo-Klasse entspricht jedem Element, das einem der Selektoren in der bereitgestellten Liste entspricht. Die Liste ist nachgiebig.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negations- oder Matches-None-Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument dargestellt wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifitätsanpassungs-Pseudo-Klasse entspricht jedem Element, das einem der Selektoren in der bereitgestellten Liste entspricht, ohne Spezifitätsgewicht hinzuzufügen. Die Liste ist nachgiebig.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren mit dem angehängten Element übereinstimmt.

## Benutzerdefinierte Zustands-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Entspricht benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Ansichtsübergangs-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einem [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Entspricht dem Wurzelelement eines Dokuments, wenn ein [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu entsprechen, wenn der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Entspricht dem Wurzelelement eines Dokuments, wenn ein bestimmter [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu entsprechen, wenn der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie beliebig viele Pseudo-Klassen in einem Selektor verketten.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert werden, umfassen die folgenden:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} (Eingabe) {{Experimental_Inline}}
- `:blank` (Seite)
- {{CSSxRef(":buffering")}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}}

H

- {{CSSxRef(":has-slotted")}}
- {{CSSxRef(":has", ":has()")}}
- {{CSSXRef(":heading")}}
- {{CSSXRef(":heading_function", ":heading()")}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host_function", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}
- {{CSSxRef(":muted")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":open")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":seeking")}}
- {{CSSxRef(":stalled")}}
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-current")}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{CSSxRef(":where", ":where()")}}

### Nicht-standardisierte Pseudo-Klassen

Nicht-standardisierte, herstellerspezifische Pseudo-Klassen beinhalten:

#### `-moz-` Präfix

- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- {{CSSxRef(":-moz-only-whitespace")}}
- {{CSSxRef(":-moz-submit-invalid")}}
- {{CSSxRef(":-moz-suppressed")}}
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef(":-moz-window-inactive")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
