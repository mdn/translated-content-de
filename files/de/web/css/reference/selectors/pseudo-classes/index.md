---
title: Pseudo-Klassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen spezifischen Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über dem Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`) gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element einen Stil zuzuweisen, nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie die Geschichte des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das Ihnen zeigt, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen ermöglichen es [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einen _bestimmten Teil_ eines Elements zu stylen.

## Elementare Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kerndefinition von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt auf jedes Element, das definiert ist.
- {{CSSxRef(":heading")}}
  - : Passt auf jedes Überschriftselement (`<h1>`-`<h6>`).

## Pseudo-Klassen für Anzeigestatus von Elementen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt auf ein Element, das entweder geöffnet oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt auf ein Popover-Element, das sich derzeit im angezeigten Zustand befindet.
- {{CSSxRef(":modal")}}
  - : Passt auf ein Element, das sich in einem Zustand befindet, in dem es jegliche Interaktion mit Elementen außerhalb ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt auf ein Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt auf ein Element, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das im aktivierten Zustand ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das im deaktivierten Zustand ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert ein Element, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert ein Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt auf ein Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird es auf das `placeholder`-Attribut in den Elementen {{htmlelement("input")}} und {{htmlelement("textarea")}} passen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt auf ein oder mehrere UI-Elemente, die die Standardeinstellung unter einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsschaltflächen aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt auf UI-Elemente, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt auf ein Benutzer-Eingabeelement, das leer ist, einschließlich eines leeren Strings oder anderer nullwertiger Eingaben.
- {{CSSxRef(":valid")}}
  - : Passt auf ein Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement vom Typ 'email', das eine korrekt formulierte E-Mail-Adresse enthält oder einen leeren Wert, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt auf ein Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement vom Typ 'email', in das ein Name eingegeben wurde.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel, ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel, ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrektem Input, aber nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit fehlerhaftem Input, aber nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen reflektieren die Dokumentensprache und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder der Schriftrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtung aus, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Orts-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf fokussierte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt auf ein Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Passt auf Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt auf Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt auf Links, deren absolute URL mit der Ziel-URL übereinstimmt. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt auf das Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die eine Referenzpunkt für Selektoren sind, gegen die abgestimmt wird.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente zu markieren, die oder einen Nachkommen haben, der das Ziel der Dokument-URL ist, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die sich in einem Zustand befinden können, in dem sie als abspielend beschrieben würden, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das derzeit eine Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird, aber vorübergehend angehalten ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird, aber angehalten ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein geräuscherzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein geräuscherzeugendes Element, dessen Lautstärkepegel von dem Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Ansehen von etwas, das ein Timing besitzt, wie ein [WebVTT](/de/docs/Web/API/WebVTT_API) Untertiteltrack.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}} Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}} Element auftritt.

## Baumstruktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>` Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichen-Zeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet die `An+B` Notation, um Elemente aus einer Liste von Nachbarelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet die `An+B` Notation, um Elemente aus einer Liste von Nachbarelementen auszuwählen, rückwärts vom Ende der Liste zählend.
- {{CSSxRef(":first-child")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt auf ein Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet die `An+B` Notation, um Überschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet die `An+B` Notation, um Elemente aus einer Liste von Nachbarelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Nachbarelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet die `An+B` Notation, um Elemente aus einer Liste von Nachbarelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Nachbarelementen entsprechen, rückwärts vom Ende der Liste zählend.
- {{CSSxRef(":first-of-type")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt auf ein Element, das keine Geschwister des gewählten Typselektors hat.

## Shadow-Struktur-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Shadow DOM.

- {{CSSxRef(":host")}}
  - : Passt auf den Shadow-Host des Shadow-Baums.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt auf ein Element, das {{CSSxRef(":host")}} entspricht und einem der Selektoren in der angegebenen Liste entspricht.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Shadow-Baums im Kontext des Shadow-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt auf Slot-Elemente, denen Inhalt zugewiesen wurde.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden können, wie das Halten eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät markiert, wie das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn auf das Element geklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element im Fokus steht.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element im Fokus steht und der Benutzeragent erkennt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt auf ein Element, auf das {{CSSxRef(":focus")}} zutrifft, sowie jedes Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt auf das {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, die derzeit gescrollt wird, mit anderen Worten, den **aktiven** Scroll-Marker.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die alle-passende Pseudo-Klasse passt auf jedes Element, das einem der Selektoren in der angegebenen Liste entspricht. Die Liste wird nachsichtig behandelt.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negation oder keine-passende Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument repräsentiert wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifizitätsanpassungs-Pseudo-Klasse passt auf jedes Element, das einem der Selektoren in der angegebenen Liste entspricht, ohne dass Spezifizitätsgewicht hinzukommt. Die Liste wird nachsichtig behandelt.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn sie gegen das angehängte Element verankert sind.

## Benutzerdefinierte Status-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt auf benutzerdefinierte Elemente, die den angegebenen benutzerdefinierten Status haben.

## Seiten-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} At-Anweisung verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Übergangsansichts-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einem [Ansichtstransition](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt auf das Wurzelelement eines Dokuments, wenn ein [Ansichtstransition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Gang ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Passt auf das Wurzelelement eines Dokuments, wenn ein spezifizierter [Ansichtstransition](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Gang ist (_aktiv_) und hört auf zu passen, sobald der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie beliebig viele Pseudo-Klassen in einem Selektor aneinanderreihen.

## Alphabetisches Verzeichnis

Durch eine Reihe von CSS-Spezifikationen definierte Pseudo-Klassen umfassen folgende:

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

### Nicht standardisierte Pseudo-Klassen

Nicht standardisierte, anbieterpräfixierte Pseudo-Klassen umfassen:

#### `-moz-` Präfix

- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr")}}
- {{CSSxRef(":-moz-locale-dir_rtl")}}
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
