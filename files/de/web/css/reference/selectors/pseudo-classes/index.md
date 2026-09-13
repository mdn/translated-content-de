---
title: Pseudo-Klassen
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: c62181855c91ac0435dea5fa759a250e1dea4f8b
---

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, Elemente basierend auf Informationen auszuwählen, die außerhalb des Dokumentenbaums liegen, wie z.B. ein bestimmter Zustand des ausgewählten Elements. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button zu stylen, wenn der Zeiger eines Benutzers darüber schwebt.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Pseudo-Klassen-Namen (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element einen Stil zuzuweisen, nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie den Verlauf des Browsers (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, wodurch Sie wissen, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) verwendet werden, um einen _bestimmten Teil_ eines Elements zu stylen.

## Elementar-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt zu jedem definierten Element.
- {{CSSxRef(":heading")}}
  - : Passt zu jedem Überschriftselement (`<h1>`-`<h6>`).

## Pseudo-Klassen für Anzeigestatus von Elementen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt zu einem Element, das geöffnet oder geschlossen sein kann und momentan geöffnet ist.
- {{CSSxRef(":popover-open")}}
  - : Passt zu einem Popover-Element, das sich momentan im angezeigten Zustand befindet.
- {{CSSxRef(":modal")}}
  - : Passt zu einem Element, das in einem Zustand ist, in dem es alle Interaktionen mit Elementen außerhalb von ihm ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":fullscreen")}}
  - : Passt zu einem Element, das sich momentan im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt zu einem Element, das sich momentan im Bild-in-Bild-Modus befindet.
- {{CSSXref(":xr-overlay")}}
  - : Passt zum DOM-Overlay-Element während einer immersiven AR- oder VR-Sitzung.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Status, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das sich in einem aktivierten Zustand befindet.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das sich in einem deaktivierten Zustand befindet.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht verändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird es das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen ansprechen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt worden ist.
- {{CSSxRef(":default")}}
  - : Passt zu einem oder mehreren UI-Elementen, die die Standardeinstellung in einer Gruppe von Elementen darstellen.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder eingeschaltet sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt zu UI-Elementen, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabeelement, das leer ist und eine leere Zeichenkette oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt zu einem Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig geformte E-Mail-Adresse oder einen leeren Wert enthält, wenn die Eingabesteuerung nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt zu einem Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', in dem ein Name eingegeben wurde.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel eine Schieberegler-Steuerung, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel eine Schieberegler-Steuerung, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, aber nur, wenn der Benutzer mit ihm interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, aber nur, wenn der Benutzer mit ihm interagiert hat.

## Sprachbezogene Pseudo-Klassen

Diese Pseudo-Klassen reflektieren die Dokumentsprache und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Skriptrichtung.

- {{cssxref(":dir()")}}
  - : Die Richtlinien-Pseudo-Klasse wählt ein Element basierend auf seiner Richtung aus, die durch die Dokumentsprache bestimmt wird.
- {{cssxref(":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standortbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entspricht.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL mit der Ziel-URL übereinstimmt. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt zu dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die als Referenzpunkt für Selektoren dienen, gegen die abgeglichen wird.

> [!NOTE]
> Eine `:target-within` Pseudo-Klasse, um Elemente zu matchen, die oder die einen Nachfahren haben, welcher das Ziel der Dokument-URL ist, wurde definiert, aber aus der Spezifikation entfernt. Verwenden Sie `:has(:target)` für diesen Zweck.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, in dem sie als spielend beschrieben werden, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein abspielbares Element, das gerade abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein abspielbares Element, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Repräsentiert ein abspielbares Element, das derzeit eine Wiedergabeposition in der Medieresource sucht.
- {{CSSxRef(":buffering")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber vorübergehend gestoppt ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Repräsentiert ein abspielbares Element, das spielt, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Repräsentiert ein klangerzeugendes Element, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Repräsentiert ein klangerzeugendes Element, dessen Lautstärkepegel vom Browser gesperrt ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten, wenn Sie sich etwas ansehen, das Timing hat, wie z.B. eine [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder den Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}} Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}} Element auftritt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. In HTML ist das normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne andere Kinder als Leerzeichen.
- {{cssxref(":nth-child()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{cssxref(":nth-last-child()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts vom Ende der Liste.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Verwendet `An+B` Notation, um Überschriftselemente (`<h1>`-`<h6>`) auszuwählen.
- {{cssxref(":nth-of-type()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{cssxref(":nth-last-of-type()")}}
  - : Verwendet `An+B` Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des gewählten Typselektors hat.

## Schattenstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf das Shadow-DOM.

- {{CSSxRef(":host")}}
  - : Passt zum Schattenbaum-Schatten-Host.
- {{cssxref(":host()")}}
  - : Passt zu einem Element, das zu {{CSSxRef(":host")}} passt und zu einem der Selektoren in der bereitgestellten Liste passt.
- {{cssxref(":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schatten-Hosts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt zu Slot-Elementen, denen Inhalte zugewiesen wurden.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden, z.B. das Bewegen eines Mauszeigers über ein Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer eine Mauszeigerkonstruktion über ein Element bewegt.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzer-Agent identifiziert, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} zutrifft, plus jedes Element, das einen Nachfahren hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt zum {{cssxref("::scroll-marker")}} Pseudo-Element einer {{cssxref("scroll-marker-group")}}, das gerade gescrollt wird, im anderen Wort, der **aktive** Scroll-Markenanzeiger.

### Grenzbereich für Vorfahrenvergleich im Top-Layer

Beim Setzen von Stilen mit einem `:hover`, `:active` oder `:focus-within` Pseudo-Klassen-Selektor passt der Selektor zu einem verschachtelten Satz von Elementen den DOM-Baum hinauf. Wenn die Hierarchie ein Element im {{Glossary("top_layer", "Top-Layer")}} enthält (zum Beispiel ein [Popover](/de/docs/Web/API/Popover_API) oder einen [anpassbaren `<select>`](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Auswahlschalter), endet das Matching an diesem Top-Layer-Element.

Zum Beispiel enthält der folgende Code ein anpassbares `<select>` Element und ein Popover. Wir haben jedes Element auf der Seite so gestylt, dass es bei Hover einen dicken blauen gestrichelten {{cssxref("border")}} erhält.

```html live-sample___matching-boundary
<main>
  <select>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </select>

  <div>
    <button popovertarget="mypopover">Toggle popover</button>
    <section id="mypopover" popover>
      <p>I am a popover</p>
      <button>I am a popover button</button>
    </section>
  </div>
</main>
```

```css hidden live-sample___matching-boundary
* {
  padding: 5px;
}
```

```css live-sample___matching-boundary
select,
::picker(select) {
  appearance: base-select;
}

:hover {
  border: 5px dashed blue;
}
```

{{EmbedLiveSample("matching-boundary", "100%", 200)}}

Beachten Sie, dass, wenn Sie über das `<select>` Element oder den Popover-Umschalter schweben, alle Vorfahren dieser Elemente die Umrandung erhalten. Sobald jedoch der Auswahlpickel oder das Popover geöffnet ist, wird bei Hover über einen seiner Nachkommen nur bis zum Top-Layer-Element selbst (der Auswahlpickel oder das Popover) eine Umrandung angewendet. Das Matching endet also an diesem Element.

Dieses Verhalten verhindert, dass das Pseudo-Klassen-Matching aus einem Top-Layer-Baustein in die umliegende Seite herausläuft, was andernfalls dazu führen kann, dass eine Benutzeroberfläche beschädigt aussieht.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) oder [fehlertolerante Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) als Parameter.

- {{cssxref(":is()")}}
  - : Die Übereinstimmungs-Pseudo-Klasse passt zu jedem Element, das einem der in der Liste bereitgestellten Selektoren entspricht. Die Liste ist fehlertolerant.
- {{cssxref(":not()")}}
  - : Die Verneinungs- oder Nicht-Übereinstimmungs-Pseudo-Klasse repräsentiert jedes Element, das nicht durch ihr Argument repräsentiert wird.
- {{cssxref(":where()")}}
  - : Die Spezifizitätsanpassungs-Pseudo-Klasse passt zu jedem Element, das einem der in der Liste bereitgestellten Selektoren entspricht, ohne Spezifizitätsgewicht hinzuzufügen. Die Liste ist fehlertolerant.
- {{cssxref(":has()")}}
  - : Die Beziehungspseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn gegen das angehängte Element verankert wird.

## Benutzerdefinierte Status-Pseudo-Klassen

Diese Pseudo-Klassen gelten für benutzerdefinierte Elemente.

- {{cssxref(":state()")}}
  - : Passt zu benutzerdefinierten Elementen, die den angegebenen benutzerdefinierten Status haben.

## Seitenbezogene Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}} Regel verwendet.

- {{CSSxRef(":left")}}
  - : Repräsentiert alle linken Seiten eines gedruckten Dokuments.
- {{CSSxRef(":right")}}
  - : Repräsentiert alle rechten Seiten eines gedruckten Dokuments.
- {{CSSxRef(":first")}}
  - : Repräsentiert die erste Seite eines gedruckten Dokuments.
- `:blank`
  - : Repräsentiert eine leere Seite in einem gedruckten Dokument.

## View-Übergangs-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Elemente, die an einem [View-Übergang](/de/docs/Web/API/View_Transition_API) beteiligt sind.

- {{cssxref(":active-view-transition")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn ein [View-Übergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Bearbeitung (_aktiv_) ist und hört auf zu passen, wenn der Übergang abgeschlossen ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt zum Wurzelelement eines Dokuments, wenn ein spezifizierter [View-Übergang](/de/docs/Web/API/View_Transition_API#concepts_and_usage) in Bearbeitung (_aktiv_) ist und hört auf zu passen, wenn der Übergang abgeschlossen ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Sie in einem Selektor so viele Pseudo-Klassen verketten, wie Sie möchten.

## Alphabetischer Index

Durch eine Reihe von CSS-Spezifikationen definierte Pseudo-Klassen umfassen Folgendes:

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

- {{CSSXref(":xr-overlay")}} {{Experimental_Inline}}

### Nicht-standardisierte Pseudo-Klassen

Nicht-standardisierte, mit einem Präfix versehene Pseudo-Klassen umfassen:

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
