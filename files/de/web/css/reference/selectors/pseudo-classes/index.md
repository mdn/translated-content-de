---
title: Pseudoklassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudoklasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, damit Sie Elemente basierend auf Informationen auswählen können, die außerhalb des Dokumentenbaums liegen, wie zum Beispiel einen bestimmten Zustand der ausgewählten Elemente. Beispielsweise kann die Pseudoklasse {{CSSxRef(":hover")}} verwendet werden, um eine Schaltfläche zu gestalten, wenn der Mauszeiger eines Benutzers darüber schwebt.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudoklasse besteht aus einem Doppelpunkt (`:`) gefolgt vom Namen der Pseudoklasse (z. B. `:hover`). Eine funktionale Pseudoklasse enthält auch ein Paar Klammern zur Definition der Argumente (z. B. `:dir()`). Das Element, an das eine Pseudoklasse angehängt ist, wird als _Anker-Element_ definiert (z. B. `button` im Fall von `button:hover`).

Pseudoklassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie die Verlaufshistorie des Navigators (z. B. {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, wodurch Sie wissen, ob sich die Maus über einem Element befindet oder nicht) einen Stil zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudoklassen können [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu gestalten.

## Elementare Pseudoklassen

Diese Pseudoklassen beziehen sich auf die grundlegende Identität von Elementen.

- {{CSSxRef(":defined")}}
  - : Stimmt mit jedem Element überein, das definiert ist.
- {{CSSxRef(":heading")}}
  - : Stimmt mit jedem Überschriftenelement (`<h1>`-`<h6>`) überein.

## Pseudoklassen für den Anzeigestatus von Elementen

Diese Pseudoklassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Stimmt mit einem Element überein, das entweder geöffnet oder geschlossen sein kann und derzeit geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Stimmt mit einem Popover-Element überein, das sich aktuell im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Stimmt mit einem Element überein, das sich in einem Zustand befindet, in dem es alle Interaktionen mit außerhalb liegenden Elementen ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Stimmt mit einem Element überein, das derzeit im Vollbildmodus ist.
- {{CSSxRef(":picture-in-picture")}}
  - : Stimmt mit einem Element überein, das sich derzeit im Bild-in-Bild-Modus befindet.

## Eingabepseudoklassen

Diese Pseudoklassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das aktiv ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzerschnittstellenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht verändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Stimmt mit einem Eingabeelement überein, das Platzhaltertext anzeigt. Beispielsweise wird es mit dem `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen übereinstimmen.
- {{CSSxRef(":autofill")}}
  - : Stimmt überein, wenn ein {{htmlelement("input")}}-Element vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Stimmt mit einem oder mehreren UI-Elementen überein, die die Standardeinstellung innerhalb einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Stimmt, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Stimmt mit UI-Elementen überein, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Stimmt mit einem Benutzereingabeelement, das leer ist, d.h. eine leere Zeichenfolge oder eine andere nicht zugeordnete Eingabe enthält, überein.
- {{CSSxRef(":valid")}}
  - : Stimmt mit einem Element mit gültigem Inhalt überein. Beispielsweise ein Eingabeelement vom Typ 'email', das eine gültig formatierte E-Mail-Adresse oder einen leeren Wert enthält, wenn die Eingabe nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Stimmt mit einem Element mit ungültigen Inhalten überein. Beispielsweise ein Eingabeelement mit Typ 'email' mit einem angegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Beispielsweise ein Schieberegler, wenn der ausgewählte Wert innerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Beispielsweise ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Stimmt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Stimmt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, aber nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, aber nur, wenn der Benutzer damit interagiert hat.

## Sprachbezogene Pseudoklassen

Diese Pseudoklassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Schreibrichtung.

- {{cssxref(":dir()")}}
  - : Die Dirigierungs-Pseudoklasse wählt ein Element basierend auf seiner Dirigierungsweise aus, die durch die Dokumentensprache bestimmt wird.
- {{cssxref(":lang()")}}
  - : Wählen Sie ein Element basierend auf seiner Inhaltsprache aus.

## Standort-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Links und auf Ziel-Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Stimmt mit einem Element überein, wenn das Element entweder mit {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} übereinstimmen würde.
- {{CSSxRef(":link")}}
  - : Stimmt mit Links überein, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Stimmt mit Links überein, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Stimmt mit Links, deren absolute URL die gleiche ist wie die Ziel-URL. Beispielsweise Anker-Links zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Stimmt mit dem Element überein, das das Ziel der Dokumenten-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die ein Referenzpunkt für Selektoren sind, um gegen diese überprüft zu werden.

> [!NOTE]
> Eine `:target-within`-Pseudoklasse, um Elemente abzugleichen, die oder deren Nachkommen das Ziel der Dokumenten-URL sind, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` zu diesem Zweck.

## Ressourcenstatus-Pseudoklassen

Diese Pseudoklassen gelten für Medien, die sich in einem Zustand befinden können, in dem sie als spielend beschrieben werden können, wie z. B. ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das gerade abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das gerade nach einer Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird, aber vorübergehend angehalten ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das abgespielt wird, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein tonproduzierendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein tonproduzierendes Element, das seine Lautstärke durch den Browser gesperrt hat.

## Zeitdimensionale Pseudoklassen

Diese Pseudoklassen gelten, wenn etwas angezeigt wird, das eine zeitliche Komponente hat, wie z. B. eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, der gerade angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das sich vollständig vor dem {{CSSxRef(":current")}}-Element befindet.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das sich vollständig nach dem {{CSSxRef(":current")}}-Element befindet.

## Baumstruktur-Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichensymbolen.
- {{cssxref(":nth-child()")}}
  - : Verwendet `An+B`-Notation zur Auswahl von Elementen aus einer Liste von Geschwisterelementen.
- {{cssxref(":nth-last-child()")}}
  - : Verwendet `An+B`-Notation zur Auswahl von Elementen aus einer Liste von Geschwisterelementen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Stimmt mit einem Element überein, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Stimmt mit einem Element überein, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Stimmt mit einem Element überein, das keine Geschwister hat. Beispielsweise ein Listenelement, das keine weiteren Listenelemente in dieser Liste hat.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B`-Notation zur Auswahl von Überschriftenelementen (`<h1>`-`<h6>`).
- {{cssxref(":nth-of-type()")}}
  - : Verwendet `An+B`-Notation zur Auswahl von Elementen aus einer Liste von Geschwisterelementen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{cssxref(":nth-last-of-type()")}}
  - : Verwendet `An+B`-Notation zur Auswahl von Elementen aus einer Liste von Geschwisterelementen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Stimmt mit einem Element überein, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Stimmt mit einem Element überein, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Stimmt mit einem Element überein, das keine Geschwister des gewählten Typselektors hat.

## Schattenstruktur-Pseudoklassen

Diese Pseudoklassen beziehen sich auf den Schatten-DOM.

- {{CSSxRef(":host")}}
  - : Stimmt mit dem Schatten-Wirt des Schattenbaums überein.
- {{cssxref(":host()")}}
  - : Stimmt mit einem Element über ein Kriterium in der bereitgestellten Liste überein, wenn es auch mit {{CSSxRef(":host")}} übereinstimmt.
- {{cssxref(":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schatten-Wirts aus.
- {{CSSxRef(":has-slotted")}}
  - : Stimmt mit Slot-Elementen überein, denen Inhalte zugewiesen wurden.

## Benutzeraktions-Pseudoklassen

Diese Pseudoklassen erfordern einige Interaktionen durch den Benutzer, damit sie angewendet werden, wie z. B. das Halten eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Stimmt, wenn ein Benutzer ein Element mit einer Zeigegerät kennzeichnet, wie z. B. das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Stimmt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn auf das Element geklickt wird.
- {{CSSxRef(":focus")}}
  - : Stimmt, wenn ein Element fokussiert ist.
- {{CSSxRef(":focus-visible")}}
  - : Stimmt, wenn ein Element fokussiert ist und der Benutzeragent erkennt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Stimmt mit einem Element überein, auf das {{CSSxRef(":focus")}} angewendet wird, plus jedes Element, das einen Nachfahren hat, auf das {{CSSxRef(":focus")}} angewendet wird.
- {{CSSxRef(":target-current")}}
  - : Stimmt mit dem {{cssxref("::scroll-marker")}}-Pseudoelement einer {{cssxref("scroll-marker-group")}}, die derzeit gescrollt wird, in anderen Worten, dem **aktiven** Scroll-Marker.

## Funktionale Pseudoklassen

Diese Pseudoklassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder eine [vergebende Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{cssxref(":is()")}}
  - : Die Matches-Any-Pseudoklasse stimmt mit jedem Element überein, das mit einem der in der Liste angegebenen Selektoren übereinstimmt. Die Liste ist vergebend.
- {{cssxref(":not()")}}
  - : Die Negations- oder Matches-None-Pseudoklasse repräsentiert jedes Element, das nicht durch sein Argument repräsentiert wird.
- {{cssxref(":where()")}}
  - : Die spezifitätsanpassende Pseudoklasse stimmt mit jedem Element überein, das mit einem der in der Liste angegebenen Selektoren übereinstimmt, ohne dabei eine spezifische Gewichtung hinzuzufügen. Die Liste ist vergebend.
- {{cssxref(":has()")}}
  - : Die relationale Pseudoklasse repräsentiert ein Element, wenn einer der relativen Selektoren beim Verankern am zugehörigen Element übereinstimmt.

## Benutzerdefinierte Zustands-Pseudoklassen

Diese Pseudoklassen gelten für benutzerdefinierte Elemente.

- {{cssxref(":state()")}}
  - : Stimmt mit benutzerdefinierten Elementen überein, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}}-At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die ersten Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## Ansichtsübergangs-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Elemente, die an einem [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Stimmt mit dem Root-Element eines Dokuments überein, wenn ein [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und stimmt nicht mehr überein, sobald der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Stimmt mit dem Root-Element eines Dokuments überein, wenn ein bestimmter [Ansichtsübergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) im Gange ist (_aktiv_) und stimmt nicht mehr überein, sobald der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie in einem Selektor so viele Pseudoklassen verketten, wie Sie möchten.

## Alphabetisches Verzeichnis

Pseudoklassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen:

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
- {{CSSxRef(":target-current")}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{cssxref(":where()")}}

### Nicht standardisierte Pseudoklassen

Nicht standardisierte herstellerspezifische Pseudoklassen umfassen:

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
