---
title: Pseudo-Klassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: d85ca18fd3d87f63bd83f711bac919ddcb2eb632
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das an einen Selektor angehängt wird und es ermöglicht, Elemente basierend auf Informationen auszuwählen, die außerhalb des Dokumentbaums liegen, wie z.B. ein spezifischer Zustand der ausgewählten Elemente. Beispielsweise kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button zu stylen, wenn ein Zeiger eines Benutzers darüber schwebt.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`) gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält ebenfalls ein Klammerpaar, um die Argumente zu definieren (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angefügt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es, einen Stil auf ein Element anzuwenden, nicht nur in Bezug auf den Inhalt des Dokumentbaums, sondern auch in Bezug auf externe Faktoren wie die Historie des Navigators (z.B. {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, wobei ermittelt wird, ob sich die Maus über einem Element befindet oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu stylen.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die grundlegende Identität der Elemente.

- {{CSSxRef(":defined")}}
  - : Entspricht jedem definierten Element.
- {{CSSxRef(":heading")}}
  - : Entspricht jedem Überschriftenelement (`<h1>`-`<h6>`).

## Pseudo-Klassen des Anzeigezustands

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigezustand.

- {{CSSxRef(":open")}}
  - : Entspricht einem Element, das entweder geöffnet oder geschlossen werden kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Entspricht einem Popover-Element, das sich derzeit im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Entspricht einem Element, das sich in einem Zustand befindet, in dem es jede Interaktion mit Elementen außerhalb ausschließt, bis die Interaktion abgewiesen wurde.
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
  - : Repräsentiert ein Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert ein Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Entspricht einem Eingabeelement, das Platzhaltertext anzeigt. Beispielsweise wird das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen übereinstimmen.
- {{CSSxRef(":autofill")}}
  - : Entspricht, wenn ein {{htmlelement("input")}} durch den Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Entspricht einem oder mehreren UI-Elementen, die unter einem Satz von Elementen die Standardeinstellungen sind.
- {{CSSxRef(":checked")}}
  - : Entspricht, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Entspricht UI-Elementen, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Entspricht einem Benutzereingabeelement, das leer ist, entweder eine leere Zeichenkette oder eine andere null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Entspricht einem Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine korrekt formatierte E-Mail-Adresse enthält oder einen leeren Wert, wenn die Steuerung nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Entspricht einem Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Wird für Elemente mit Bereichsbeschränkungen angewendet. Zum Beispiel eine Schiebereglersteuerung, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Wird für Elemente mit Bereichsbeschränkungen angewendet. Zum Beispiel eine Schiebereglersteuerung, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Entspricht, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Entspricht, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit inkorrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Linguistische Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Dirigierendheitspseudo-Klasse wählt ein Element basierend auf seiner Dirigierendheit aus, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltssprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Entspricht einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entspricht.
- {{CSSxRef(":link")}}
  - : Entspricht Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Entspricht Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Entspricht Links, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Ankerlinks zur selben Seite.
- {{CSSxRef(":target")}}
  - : Entspricht dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Referenzpunkt für Selektoren darstellen, gegen den sie abgeglichen werden können.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente auszuwählen, die sind oder einen Nachkommen haben, der das Ziel der Dokument-URL ist, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die sich in einem Zustand befinden können, in dem sie als spielend beschrieben werden könnten, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein spielbares Element, das gerade abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein spielbares Element, das pausiert.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein spielbares Element, das derzeit eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein spielbares Element, das spielt, aber vorübergehend angehalten ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein spielbares Element, das spielt, aber angehalten ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein klangerzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein klangerzeugendes Element, dessen Lautstärkepegel vom Browser gesperrt wurde.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten, wenn etwas angezeigt wird, das eine zeitliche Dimension hat, wie ein [WebVTT](/de/docs/Web/API/WebVTT_API) Untertiteltrack.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das gerade angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element vorkommt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element vorkommt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf den Standort eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. Im HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichenziffern.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, rückwärts von der Liste aus zählend.
- {{CSSxRef(":first-child")}}
  - : Entspricht einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Entspricht einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Entspricht einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet die `An+B`-Notation, um Überschriftenelemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwistern entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwistern rückwärts entsprechen, vom Ende der Liste aus zählend.
- {{CSSxRef(":first-of-type")}}
  - : Entspricht einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Entspricht einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Entspricht einem Element, das keine Geschwister des gewählten Typ-Selektors hat.

## Schattenstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Shadow DOM.

- {{CSSxRef(":host")}}
  - : Entspricht dem Shadow-Host des Schattenbaums.
- {{CSSxRef(":host_function", ":host()")}}
  - : Entspricht einem Element, das {{CSSxRef(":host")}} entspricht und jedem der in der Liste bereitgestellten Selektoren entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schattenhosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Entspricht Slot-Elementen, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, um sie anzuwenden, wie z.B. das Halten eines Zeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Entspricht, wenn ein Benutzer ein Element mit einem Zeigegerät bezeichnet, z.B. das Halten des Mauszeigers über das Element.
- {{CSSxRef(":active")}}
  - : Entspricht, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Entspricht, wenn ein Element im Fokus steht.
- {{CSSxRef(":focus-visible")}}
  - : Entspricht, wenn ein Element im Fokus steht und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Entspricht einem Element, auf das {{CSSxRef(":focus")}} zutrifft, sowie jedem Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Entspricht dem {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, die derzeit gescrollt wird, in anderen Worten, dem **aktiven** Scroll-Marker.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder [eine fehlertolerante Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die Übereinstimmung-mit-allen-Pseudo-Klasse entspricht jedem Element, das einem der in der Liste bereitgestellten Selektoren entspricht. Die Liste ist fehlertolerant.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negations- oder Keine-Übereinstimmung-Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument dargestellt wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifitätsanpassungs-Pseudo-Klasse entspricht jedem Element, das einem der in der Liste bereitgestellten Selektoren ohne Hinzufügung von Spezifitätsgewicht entspricht. Die Liste ist fehlertolerant.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn gegen das angehängte Element verankert.

## Benutzerdefinierte Zustandspseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Entspricht benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Ansichtsübertragungs-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einer [Ansichtsübertragung](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Entspricht dem Wurzelelement eines Dokuments, wenn eine [Ansichtsübertragung](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und das Matchen stoppt, sobald die Übertragung abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Entspricht dem Wurzelelement eines Dokuments, wenn eine angegebene [Ansichtsübertragung](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und das Matchen stoppt, sobald die Übertragung abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen, können Sie so viele Pseudo-Klassen wie gewünscht in einem Selektor aneinander reihen.

## Alphabetischer Index

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen folgendes:

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

Nicht-standardisierte, anbieterpräfixierte Pseudo-Klassen umfassen:

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
