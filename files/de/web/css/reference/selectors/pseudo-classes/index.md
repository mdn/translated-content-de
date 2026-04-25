---
title: Pseudo-Klassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: a75edf682e5e346b4f97582db6cbccaae800ef73
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, Elemente basierend auf Informationen auszuwählen, die außerhalb des Dokumentenbaums liegen, wie zum Beispiel ein spezifischer Zustand der ausgewählten Elemente. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button zu stylen, wenn der Zeiger eines Benutzers darüber schwebt.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt von dem Namen der Pseudo-Klasse (z. B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z. B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element einen Stil zuzuweisen, nicht nur in Bezug auf den Inhalt des Dokumentbaums, sondern auch in Bezug auf externe Faktoren, wie die Verlaufsgeschichte des Browsers ({{CSSxRef(":visited")}}, zum Beispiel), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, was Ihnen mitteilt, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zum Stylen eines _spezifischen Teils_ eines Elements verwendet werden.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kerneigenschaft von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt zu jedem definierten Element.
- {{CSSxRef(":heading")}}
  - : Passt zu jedem Überschriftenelement (`<h1>`-`<h6>`).

## Anzeigenzustand Pseudo-Klassen für Elemente

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigzuständen.

- {{CSSxRef(":open")}}
  - : Passt zu einem Element, das geöffnet oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt zu einem Popover-Element, das sich derzeit im anzeigbaren Zustand befindet.
- {{CSSxRef(":modal")}}
  - : Passt zu einem Element, das sich in einem Zustand befindet, in dem es alle Interaktion mit Elementen außerhalb davon ausschließt, bis die Interaktion beendet wird.
- {{CSSxRef(":fullscreen")}}
  - : Passt zu einem Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt zu einem Element, das sich derzeit im Picture-in-Picture-Modus befindet.
- {{CSSXref(":xr-overlay")}}
  - : Passt zu dem DOM-Overlay-Element während einer immersiven AR- oder VR-Session.

## Eingabe Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein UI-Element, das im aktivierten Zustand ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein UI-Element, das im deaktivierten Zustand ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitbar ist.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird es das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen entsprechen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt zu einem oder mehreren UI-Elementen, die das Standardelement innerhalb einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt zu UI-Elementen, wenn sie in einem unbestimmten Zustand sind.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabe-Element, das leer ist, ein leeres Zeichenkette oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt zu einem Element mit gültigen Inhalten. Zum Beispiel ein Eingabefeld des Typs 'email', das eine korrekt formatierte E-Mail-Adresse enthält, oder einen leeren Wert, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt zu einem Element mit ungültigen Inhalten. Zum Beispiel ein Eingabefeld des Typs 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Reichweitenbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Reichweitenbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, aber nur, wenn der Benutzer es bearbeitet hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, aber nur, wenn der Benutzer es bearbeitet hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schriftweiterleitung.

- {{cssxref(":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtung, wie sie durch die Dokumentensprache bestimmt wird.
- {{cssxref(":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache.

## Ortsbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL die gleiche ist wie die Ziel-URL. Zum Beispiel Anker-Links zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt zum Element, das das Ziel der Dokumenten-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Bezugspunkt für Selektoren darstellen, die passen sollen.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente zu markieren, die oder einen Nachkommen, das Ziel der Dokumenten-URL sind, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcen-Zustand Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, in dem sie als spielend beschrieben werden können, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das aktuell abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das angehalten ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das gerade eine Wiedergabeposition in der Mediendatei sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber temporär gestoppt ist, weil es die Mediendatei herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber gestoppt ist, weil es die Mediendatei nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein klangerzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein klangerzeugendes Element, dessen Lautstärkepegel durch den Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Ansehen von etwas, das Timing hat, wie beispielsweise ein [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitel-Track.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahr des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstruktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichen-Zeichen.
- {{cssxref(":nth-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{cssxref(":nth-last-child()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts vom Ende der Liste zählend.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation, um Überschriftenelemente (`<h1>`-`<h6>`) auszuwählen.
- {{cssxref(":nth-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{cssxref(":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste zählend.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des ausgewählten Typ-Selectors hat.

## Schattenstruktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Schatten-DOM.

- {{CSSxRef(":host")}}
  - : Passt zum Schattenbaum-Wirten.
- {{cssxref(":host()")}}
  - : Passt zu einem Element, das {{CSSxRef(":host")}} entspricht und zu irgendeinem der bereitgestellten Selektoren in der Liste passt.
- {{cssxref(":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schattenwirts.
- {{CSSxRef(":has-slotted")}}
  - : Passt zu Slot-Elementen, denen Inhalte zugewiesen wurden.

## Nutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion durch den Benutzer, um anzuwenden, wie z. B. das Überfahren eines Elements mit dem Mauszeiger.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät bezeichnet, wie z.B. das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn auf das Element geklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent erkennt, dass das Element sichtbar fokussiert werden sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} zutrifft, sowie zu jedem Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt zum {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, das derzeit gerollt ist, mit anderen Worten, der **aktive** Scroll-Marker.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{cssxref(":is()")}}
  - : Die Zu-jeglichem-passende Pseudo-Klasse passt zu jedem Element, das zu einem der bereitgestellten Selektoren in der Liste passt. Die Liste ist nachsichtsvoll.
- {{cssxref(":not()")}}
  - : Die Negierungs-, oder Zu-keinem-passende-Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument repräsentiert wird.
- {{cssxref(":where()")}}
  - : Die Spezifitätsanpassende Pseudo-Klasse passt zu jedem Element, das zu einem der bereitgestellten Selektoren in der Liste passt, ohne jegliche Spezifikationsgewichtung hinzuzufügen. Die Liste ist nachsichtig.
- {{cssxref(":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn eines der relativen Selektoren übereinstimmt, wenn es gegen das angeheftete Element verankert ist.

## Benutzerdefinierte Zustandspseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{cssxref(":state()")}}
  - : Passt zu benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem Druckdokument und werden mit der {{CSSxRef("@page")}} Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines Druckdokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines Druckdokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines Druckdokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem Druckdokument.

## Ansichtsübergang-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die in einen [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) involviert sind.

- {{cssxref(":active-view-transition")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn ein [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Gang ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn ein spezifizierter [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Gang ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Ähnlich wie bei regulären Klassen, können Sie so viele Pseudo-Klassen wie gewünscht in einem Selektor verketten.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen folgende:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type()")}}
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

X

- {{CSSXRef(":xr-overlay")}} {{Experimental_Inline}}

### Nicht-standardisierte Pseudo-Klassen

Nicht-standardisierte, herstellerspezifische Pseudo-Klassen umfassen:

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
- [CSS-Selektoren-](/de/docs/Web/CSS/Guides/Selectors) Modul
