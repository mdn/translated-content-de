---
title: Pseudoklassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudoklasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, um Elemente auszuwählen, die auf Informationen basieren, die außerhalb des Dokumentbaums liegen, wie z. B. ein bestimmter Zustand des ausgewählten Elements (oder der Elemente). Beispielsweise kann die Pseudoklasse {{CSSxRef(":hover")}} verwendet werden, um einen Button zu gestalten, wenn der Zeiger eines Benutzers darüber schwebt.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudoklasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudoklasse (z. B. `:hover`). Eine funktionale Pseudoklasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z. B. `:dir()`). Das Element, an dem eine Pseudoklasse angehängt ist, ist als _Ankerelement_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudoklassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentbaums, sondern auch in Bezug auf externe Faktoren wie die Verlaufshistorie des Browsers (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} auf bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, die Auskunft darüber gibt, ob die Maus über einem Element ist oder nicht) einen Stil anzuwenden.

> [!NOTE]
> Im Gegensatz zu Pseudoklassen können [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, um einen _bestimmten Teil_ eines Elements zu gestalten.

## Elementare Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt auf jedes definierte Element.
- {{CSSxRef(":heading")}}
  - : Passt auf jedes Überschriftenelement (`<h1>`-`<h6>`).

## Pseudoklassen für Elementanzeigestatus

Diese Pseudoklassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt auf ein Element, das entweder offen oder geschlossen sein kann und derzeit offen ist.
- {{CSSxRef(":popover-open")}}
  - : Passt auf ein Popover-Element, das sich derzeit im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Passt auf ein Element, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt auf ein Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt auf ein Element, das sich derzeit im Bild-in-Bild-Modus befindet.

## Eingabepseudoklassen

Diese Pseudoklassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Beispielsweise wird es das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen treffen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wird.
- {{CSSxRef(":default")}}
  - : Passt auf ein oder mehrere UI-Elemente, die die Standardoption einer Menge von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt auf UI-Elemente, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabeelement, das leer ist und einen leeren String oder andere Null-Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Passt auf ein Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement vom Typ 'email', das eine korrekt formatierte E-Mail-Adresse enthält oder einen leeren Wert, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt auf ein Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement vom Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Trifft auf Elemente mit Bereichsbeschränkungen zu. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Trifft auf Elemente mit Bereichsbeschränkungen zu. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit inkorrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudoklassen

Diese Pseudoklassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schriftlaufrichtung.

- {{cssxref(":dir()")}}
  - : Die Richtungspseudoklasse wählt ein Element basierend auf seiner Richtung aus, die durch die Dokumentensprache bestimmt wird.
- {{cssxref(":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standort-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt auf ein Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} trifft.
- {{CSSxRef(":link")}}
  - : Passt auf Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt auf Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt auf Links, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt auf das Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Referenzpunkt für Selektoren darstellen, die abgeglichen werden sollen.

> [!NOTE]
> Eine `:target-within` Pseudoklasse, um Elemente zu treffen, die selber oder deren Nachkommen das Ziel der Dokument-URL sind, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudoklassen

Diese Pseudoklassen gelten für Medien, die in einem Zustand sein können, der als abspielend beschrieben werden könnte, wie z. B. ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das gerade abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das momentan eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber vorübergehend gestoppt wird, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonerzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonerzeugendes Element, dessen Lautstärke vom Browser gesperrt ist.

## Zeitdimensionale Pseudoklassen

Diese Pseudoklassen kommen zur Anwendung, wenn etwas mit Timing angesehen wird, wie beispielsweise ein [WebVTT](/de/docs/Web/API/WebVTT_API) Untertiteltrack.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder einen Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element vorkommt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element vorkommt.

## Baumstrukturelle Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Position eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies in der Regel das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne andere Kinder als Leerzeichenzeichen.
- {{cssxref(":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{cssxref(":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts abgezählt vom Ende der Liste.
- {{CSSxRef(":first-child")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt auf ein Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation, um Überschriftenelemente (`<h1>`-`<h6>`) auszuwählen.
- {{cssxref(":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{cssxref(":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts abgezählt vom Ende der Liste.
- {{CSSxRef(":first-of-type")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt auf ein Element, das keine Geschwister des gewählten Typ-Selektors hat.

## Schattenstrukturelle Pseudoklassen

Diese Pseudoklassen beziehen sich auf das Shadow-DOM.

- {{CSSxRef(":host")}}
  - : Passt auf den Shadow-Host des Schattenbaums.
- {{cssxref(":host()")}}
  - : Passt auf ein Element, das {{CSSxRef(":host")}} trifft und eines der Selektoren in der bereitgestellten Liste trifft.
- {{cssxref(":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Shadow-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt auf Slot-Elemente, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudoklassen

Diese Pseudoklassen erfordern einige Interaktionen seitens des Benutzers, um angewandt zu werden, wie z. B. das Schweben eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät bestimmt, wie z. B. das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt auf ein Element, auf das {{CSSxRef(":focus")}} zutrifft, sowie auf jedes Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt auf das {{cssxref("::scroll-marker")}} Pseudoelement einer {{cssxref("scroll-marker-group")}}, die gerade zum Scrollen aktiv ist, mit anderen Worten, der **aktive** Scrollmarker.

## Funktionale Pseudoklassen

Diese Pseudoklassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [tolerante Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{cssxref(":is()")}}
  - : Die matches-any-Pseudoklasse passt auf jedes Element, das einem der in der Liste angegebenen Selektoren entspricht. Die Liste ist tolerant.
- {{cssxref(":not()")}}
  - : Die Negations- oder matches-none-Pseudoklasse repräsentiert jedes Element, das durch ihr Argument nicht repräsentiert wird.
- {{cssxref(":where()")}}
  - : Die Spezifitätsanpassungs-Pseudoklasse passt auf jedes Element, das einem der in der Liste angegebenen Selektoren entspricht, ohne jegliche Spezifitätsgewichtung hinzuzufügen. Die Liste ist tolerant.
- {{cssxref(":has()")}}
  - : Die relationale Pseudoklasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn er am angeschlossenen Element verankert ist.

## Benutzerdefinierte Status-Pseudoklassen

Diese Pseudoklassen gelten für benutzerdefinierte Elemente.

- {{cssxref(":state()")}}
  - : Passt auf benutzerdefinierte Elemente, die den angegebenen benutzerdefinierten Status haben.

## Seiten-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} @-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Sichtübergangs-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Elemente, die an einem [Sichtübergang](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt auf das Wurzelelement eines Dokuments, wenn ein [Sichtübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt auf das Wurzelelement eines Dokuments, wenn ein angegebener [Sichtübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen, können Sie in einem Selektor so viele Pseudoklassen aneinanderreihen, wie Sie möchten.

## Alphabetischer Index

Pseudoklassen, die von einem Satz von CSS-Spezifikationen definiert werden, umfassen Folgendes:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type()")}}
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
- {{cssxref(":dir()")}}
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
- {{cssxref(":has()")}}
- {{CSSXRef(":heading")}}
- {{CSSXRef(":heading_function", ":heading()")}}
- {{CSSxRef(":host")}}
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":interest-source")}}
- {{CSSxRef(":interest-target")}}
- {{CSSxRef(":invalid")}}
- {{cssxref(":is()")}}

L

- {{cssxref(":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}
- {{CSSxRef(":muted")}}

N

- {{cssxref(":not()")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- {{cssxref(":nth-last-of-type()")}}
- {{cssxref(":nth-of-type()")}}

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
- {{cssxref(":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-after")}}
- {{CSSxRef(":target-current")}}
- {{CSSxRef(":target-before")}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{cssxref(":where()")}}

### Nicht-standardisierte Pseudoklassen

Nicht-standardisierte, anbieterpräfixierte Pseudoklassen umfassen:

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

- [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
