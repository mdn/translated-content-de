---
title: Pseudoklassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 898dd2394e7b70daa2c0c212282a64ccf5938341
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudoklasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudoklasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Nutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestaltet werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudoklasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudoklasse (z.B. `:hover`). Eine funktionale Pseudoklasse enthält außerdem ein Paar Klammern zur Definition der Argumente (z.B. `:dir()`). Das Element, an das eine Pseudoklasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudoklassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentbaums einen Stil zu verleihen, sondern auch in Bezug auf externe Faktoren wie den Verlauf des Browsers (z.B. {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, das angibt, ob die Maus über einem Element ist oder nicht).

> [!NOTE]
> Im Gegensatz zu Pseudoklassen können [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu gestalten.

## Elementare Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Kernidentität von Elementen.

- {{CSSxRef(":defined")}}
  - : Passt auf jedes Element, das definiert ist.

## Pseudoklassen zum Anzeigestatus von Elementen

Diese Pseudoklassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":open")}}
  - : Passt auf ein Element, das entweder offen oder geschlossen werden kann und derzeit offen ist.
- {{CSSxRef(":popover-open")}}
  - : Passt auf ein Popover-Element, das sich derzeit im Anzeigestatus befindet.
- {{CSSxRef(":modal")}}
  - : Passt auf ein Element, das sich in einem Zustand befindet, in dem es jede Interaktion mit Elementen außerhalb davon ausschließt, bis die Interaktion beendet ist.
- {{CSSxRef(":fullscreen")}}
  - : Passt auf ein Element, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":picture-in-picture")}}
  - : Passt auf ein Element, das sich derzeit im Bild-im-Bild-Modus befindet.

## Eingabe-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":enabled")}}
  - : Stellt ein User-Interface-Element dar, das sich im aktivierten Zustand befindet.
- {{CSSxRef(":disabled")}}
  - : Stellt ein User-Interface-Element dar, das sich im deaktivierten Zustand befindet.
- {{CSSxRef(":read-only")}}
  - : Stellt jedes Element dar, das vom Benutzer nicht verändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Stellt jedes Element dar, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt auf ein Eingabeelement, das Platzhaltertext anzeigt. Zum Beispiel wird es auf das `placeholder`-Attribut in den {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elementen passen.
- {{CSSxRef(":autofill")}}
  - : Passt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":default")}}
  - : Passt auf ein oder mehrere UI-Elemente, die der Standard unter einer Gruppe von Elementen sind.
- {{CSSxRef(":checked")}}
  - : Passt, wenn Elemente wie Kontrollkästchen und Optionsfelder eingeschaltet sind.
- {{CSSxRef(":indeterminate")}}
  - : Passt auf UI-Elemente, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt auf ein Benutzereingabeelement, das leer ist, eine leere Zeichenfolge oder eine andere Null-Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Passt auf ein Element mit gültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig geformte E-Mail-Adresse enthält oder ein leerer Wert, wenn die Eingabe nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Passt auf ein Element mit ungültigem Inhalt. Zum Beispiel ein Eingabeelement mit dem Typ 'email', bei dem ein Name eingegeben wurde.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert im erlaubten Bereich liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Bereichsbeschränkungen. Zum Beispiel ein Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Stellt ein Element mit korrekter Eingabe dar, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Stellt ein Element mit falscher Eingabe dar, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudoklassen

Diese Pseudoklassen spiegeln die Sprache des Dokuments wider und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder der Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudoklasse wählt ein Element basierend auf seiner Richtungsangabe aus, die durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählen Sie ein Element basierend auf seiner Inhaltssprache aus.

## Standort-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Links und auf gezielte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt auf ein Element, wenn das Element entweder auf {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} passen würde.
- {{CSSxRef(":link")}}
  - : Passt auf Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt auf Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt auf Links, deren absolute URL mit der Ziel-URL identisch ist. Zum Beispiel Ankerlinks zur gleichen Seite.
- {{CSSxRef(":target")}}
  - : Passt auf das Element, das das Ziel der URL des Dokuments ist.
- {{CSSxRef(":target-within")}}
  - : Passt auf Elemente, die das Ziel der URL des Dokuments sind, aber auch auf Elemente, die einen Nachkommen haben, der das Ziel der URL des Dokuments ist.
- {{CSSxRef(":scope")}}
  - : Stellt Elemente dar, die einen Bezugspunkt für Selektoren darstellen, gegen die abgeglichen werden soll.

## Ressourcenstatus-Pseudoklassen

Diese Pseudoklassen gelten für Medien, die in einem Zustand sein können, in dem sie als spielend beschrieben werden würden, wie zum Beispiel ein Video.

- {{CSSxRef(":playing")}}
  - : Stellt ein abspielbares Element dar, das abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Stellt ein abspielbares Element dar, das pausiert ist.
- {{CSSxRef(":seeking")}}
  - : Stellt ein abspielbares Element dar, das gerade nach einer Wiedergabeposition in der Medienressource sucht.
- {{CSSxRef(":buffering")}}
  - : Stellt ein abspielbares Element dar, das abgespielt wird, aber vorübergehend gestoppt ist, weil es die Medienressource herunterlädt.
- {{CSSxRef(":stalled")}}
  - : Stellt ein abspielbares Element dar, das abgespielt wird, aber gestoppt ist, weil es die Medienressource nicht herunterladen kann.
- {{CSSxRef(":muted")}}
  - : Stellt ein klangerzeugendes Element dar, das stummgeschaltet ist.
- {{CSSxRef(":volume-locked")}}
  - : Stellt ein klangerzeugendes Element dar, dessen Lautstärkepegel durch den Browser gesperrt ist.

## Zeitdimensionale Pseudoklassen

Diese Pseudoklassen gelten, wenn etwas betrachtet wird, das ein Timing hat, wie z.B. eine [WebVTT](/de/docs/Web/API/WebVTT_API) Untertitelspur.

- {{CSSxRef(":current")}}
  - : Stellt das Element oder das Element eines Vorfahren dar, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Stellt ein Element dar, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Stellt ein Element dar, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstrukturale Pseudoklassen

Diese Pseudoklassen beziehen sich auf die Position eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Stellt ein Element dar, das die Wurzel des Dokuments ist. In HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Stellt ein Element dar, das keine Kinder hat, außer Leerzeichenzeichen.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt auf ein Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen entsprechen, rückwärts vom Ende der Liste gezählt.
- {{CSSxRef(":first-of-type")}}
  - : Passt auf ein Element, das das erste seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt auf ein Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typselektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt auf ein Element, das keine Geschwister vom gewählten Typselektor hat.

## Schattenstrukturale Pseudoklassen

Diese Pseudoklassen beziehen sich auf das Shadow DOM.

- {{CSSxRef(":host")}}
  - : Passt auf den Wirt des Schattenbaums.
- {{CSSxRef(":host_function", ":host()")}}
  - : Passt auf ein Element, das zu {{CSSxRef(":host")}} passt und auf einen der Selektoren in der bereitgestellten Liste passt.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Wählt Elemente außerhalb des Schattenbaums im Kontext des Schattenwirts aus.
- {{CSSxRef(":has-slotted")}}
  - : Passt auf Slot-Elemente, denen Inhalte zugewiesen wurden.

## Benutzeraktions-Pseudoklassen

Diese Pseudoklassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden, wie zum Beispiel das Halten eines Mauspointers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät auswählt, beispielsweise durch Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element den Fokus hat und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt auf ein Element, auf das {{CSSxRef(":focus")}} zutrifft, zusätzlich zu jedem Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} zutrifft.
- {{CSSxRef(":target-current")}}
  - : Passt auf das {{cssxref("::scroll-marker")}}-Pseudoelement einer {{cssxref("scroll-marker-group")}}, das derzeit gescrollt wird, mit anderen Worten, den **aktiven** Scroll-Marker.

## Funktionale Pseudoklassen

Diese Pseudoklassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [verzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- {{CSSxRef(":is", ":is()")}}
  - : Die „passt-auf-jedes“-Pseudoklasse passt auf jedes Element, das auf einen der bereitgestellten Selektoren passt. Die Liste ist verzeihend.
- {{CSSxRef(":not", ":not()")}}
  - : Die Negation-, oder „passt-auf-keinen“-, Pseudoklasse stellt jedes Element dar, das nicht durch ihren Parameter dargestellt wird.
- {{CSSxRef(":where", ":where()")}}
  - : Die Spezifitätsanpassungs-Pseudoklasse passt auf jedes Element, das auf einen der bereitgestellten Selektoren passt, ohne Gewicht in der Spezifität hinzuzufügen. Die Liste ist verzeihend.
- {{CSSxRef(":has", ":has()")}}
  - : Die relationale Pseudoklasse stellt ein Element dar, wenn einer der relativen Selektoren übereinstimmt, wenn gegen das angehängte Element verankert.

## Benutzerdefinierte Zustands-Pseudoklassen

Diese Pseudoklassen gelten für benutzerdefinierte Elemente.

- {{CSSxRef(":state", ":state()")}}
  - : Passt auf benutzerdefinierte Elemente, die den angegebenen benutzerdefinierten Zustand haben.

## Seiten-Pseudoklassen

Diese Pseudoklassen beziehen sich auf Seiten in einem gedruckten Dokument und werden mit der {{CSSxRef("@page")}}-At-Regel verwendet.

- {{CSSxRef(":left")}}
  - : Stellt alle linken Seiten eines gedruckten Dokuments dar.
- {{CSSxRef(":right")}}
  - : Stellt alle rechten Seiten eines gedruckten Dokuments dar.
- {{CSSxRef(":first")}}
  - : Stellt die erste Seite eines gedruckten Dokuments dar.
- `:blank`
  - : Stellt eine leere Seite in einem gedruckten Dokument dar.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Sie so viele Pseudoklassen wie gewünscht in einem Selektor verketten.

## Alphabetisches Verzeichnis

Pseudoklassen, die durch eine Gruppe von CSS-Spezifikationen definiert sind, umfassen die folgenden:

A

- {{CSSxRef(":active")}}
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
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

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

- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)
