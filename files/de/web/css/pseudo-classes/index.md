---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: e35c1a8397220f5aa1a9063c5e62444899d3aa26
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen spezifischen Zustand des ausgewählten Elements (oder der Elemente) zu gestalten. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestaltet werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern zur Definition der Argumente (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element einen Stil zuzuweisen, nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie die Verlaufsgeschichte des Browsers (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das Ihnen anzeigt, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können mit [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) _spezifische Teile_ eines Elements gestaltet werden.

## Elementbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die grundlegende Identität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt zu jedem definierten Element.
- {{CSSxRef(":heading")}}
  - : Passt zu jedem Überschriftselement (`<h1>`-`<h6>`).

## Pseudo-Klassen für Anzeigestatus eines Elements

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt zu einem Element, das entweder offen oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt zu einem Popover-Element, das derzeit im Anzeigestatus ist.
- {{CSSxRef(":modal")}}
  - : Passt zu einem Element, das in einem Zustand ist, in dem es alle Interaktionen mit Elementen außerhalb von sich ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt zu einem Element, das derzeit im Vollbildmodus ist.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt zu einem Element, das derzeit im Bild-in-Bild-Modus ist.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen abgeglichen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt zu einem oder mehreren UI-Elementen, die die Standardeinstellung unter einer Reihe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt zu UI-Elementen, wenn sie in einem unbestimmten Zustand sind.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabeelement, das leer ist und eine leere Zeichenkette oder andere null Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Passt zu einem Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig formatiert E-Mail-Adresse oder einen leeren Wert enthält, wenn das Feld nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt zu einem Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichseinschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichseinschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder der Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtungsfähigkeit aus, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standortbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder zu {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} passen würde.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt zu dem Element, welches das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Bezugspunkt für Selektoren sind, um gegen sie abgeglichen zu werden.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente abzugleichen, die sind oder einen Nachkommen haben, der das Ziel der Dokument-URL ist, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die sich in einem Zustand befinden können, in dem sie als abspielbar beschrieben werden, wie etwa ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das derzeit eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird, aber vorübergehend gestoppt ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonabgebendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonabgebendes Element, dessen Lautstärkepegel vom Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Betrachten von etwas, das eine zeitliche Komponente hat, wie z.B. eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das sich vollständig vor dem {{CSSxRef(":current")}}-Element befindet.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das sich vollständig nach dem {{CSSxRef(":current")}}-Element befindet.

## Baumstrukturbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Standort eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne andere Kinder als Leerraumzeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, wobei von hinten nach vorne gezählt wird.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation, um Überschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ in einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ in einer Liste von Geschwisterelementen entsprechen und von hinten nach vorne gezählt werden.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des gewählten Typ-Selektors hat.

## Schattenstruktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Schatten-DOM.

- {{CSSxRef(":host")}}
  - : Passt zum Schattenbaum des Schatten-Hosts.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt zu einem Element, das zu {{CSSxRef(":host")}} passt und mit einem der Selektoren in der bereitgestellten Liste übereinstimmt.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schatten-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt zu Slot-Elementen, die Inhalt zugewiesen bekommen haben.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie zutreffen, wie das Halten eines Zeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät bezeichnet, z.B. durch das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element fokussiert ist.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element fokussiert ist und der Benutzeragent identifiziert, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} zutrifft, plus jedem Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt zum {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, die derzeit gescrollt wird, mit anderen Worten, dem **aktiven** Scroll-Marker.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorenliste](/de/docs/Web/CSS/Selector_list) oder [fehlertolerante Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Matches-Any-Pseudo-Klasse passt zu jedem Element, das mit einem der Selektoren in der bereitgestellten Liste übereinstimmt. Die Liste ist fehlertolerant.
- {{CSSxRef(":not", ":not()")}}
  - : Die Verneinungs- oder Matches-None-Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument dargestellt wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifizitätsanpassungs-Pseudo-Klasse passt zu jedem Element, das mit einem der Selektoren in der bereitgestellten Liste übereinstimmt, ohne irgendein Spezifizitätsgewicht hinzuzufügen. Die Liste ist fehlertolerant.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren ankert gegen das angehängte Element übereinstimmt.

## Benutzerdefinierte Zustands-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt zu benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}}-At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Ansichtstransitions-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einem [Ansichtstransition](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn eine [Ansichtstransition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald die Transition abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn eine spezifische [Ansichtstransition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald die Transition abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie in einem Selektor so viele Pseudo-Klassen wie gewünscht aneinanderreihen.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch einen Satz von CSS-Spezifikationen definiert werden, umfassen die folgenden:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} (input) {{Experimental_Inline}}
- `:blank` (page)
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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
