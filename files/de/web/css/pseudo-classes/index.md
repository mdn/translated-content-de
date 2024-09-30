---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 4ec4913a3aaf3b20853c2fb638922c162e565ad6
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_Pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und einen speziellen Zustand der ausgewählten Elemente festlegt. Zum Beispiel kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Mauszeiger eines Benutzers über den Button bewegt wird; dieser ausgewählte Button kann dann gestaltet werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`) gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar Klammern, um die Argumente zu definieren (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Anker-Element_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element einen Stil nicht nur in Bezug auf den Inhalt des Dokumentbaums, sondern auch in Bezug auf externe Faktoren wie der Verlauf des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (zum Beispiel {{CSSxRef(":checked")}} bei bestimmten Formularelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, womit Sie wissen, ob die Maus über einem Element ist oder nicht) zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _spezifischen Teil_ eines Elements zu gestalten.

## Pseudo-Klassen für den Anzeigestatus eines Elements

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihren Anzeigestatus.

- {{CSSxRef(":fullscreen")}}
  - : Trifft auf ein Element zu, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":modal")}}
  - : Trifft auf ein Element zu, das sich in einem Zustand befindet, in dem es alle Interaktionen mit außerhalb liegenden Elementen ausschließt, bis die Interaktion beendet wurde.
- {{CSSxRef(":picture-in-picture")}}
  - : Trifft auf ein Element zu, das sich derzeit im Bild-in-Bild-Modus befindet.

## Eingabepseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":autofill")}}
  - : Trifft zu, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":enabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das aktiviert ist.
- {{CSSxRef(":disabled")}}
  - : Repräsentiert ein Benutzeroberflächenelement, das deaktiviert ist.
- {{CSSxRef(":read-only")}}
  - : Repräsentiert jedes Element, das vom Benutzer nicht verändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Repräsentiert jedes Element, das vom Benutzer bearbeitet werden kann.
- {{CSSxRef(":placeholder-shown")}}
  - : Trifft auf ein Eingabeelement zu, das Platzhaltertext anzeigt. Beispielsweise wird das `placeholder`-Attribut in den {{htmlelement("input")}} und {{htmlelement("textarea")}}-Elementen getroffen.
- {{CSSxRef(":default")}}
  - : Trifft auf eines oder mehrere UI-Elemente zu, die in einer Gruppe von Elementen als Standard fungieren.
- {{CSSxRef(":checked")}}
  - : Trifft zu, wenn Elemente wie Kontrollkästchen und Optionsfelder aktiviert sind.
- {{CSSxRef(":indeterminate")}}
  - : Trifft auf UI-Elemente zu, die sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Trifft auf ein Benutzereingabeelement zu, das leer ist und eine leere Zeichenkette oder andere null Eingaben enthält.
- {{CSSxRef(":valid")}}
  - : Trifft auf ein Element mit gültigem Inhalt zu. Beispielsweise ein Eingabeelement mit dem Typ 'email', das eine korrekt formatierte E-Mail-Adresse enthält oder einen leeren Wert, wenn die Kontrolle nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Trifft auf ein Element mit ungültigem Inhalt zu. Beispielsweise ein Eingabeelement mit dem Typ 'email' mit einem eingetragenen Namen.
- {{CSSxRef(":in-range")}}
  - : Trifft auf Elemente mit Bereichsbeschränkungen zu. Beispielsweise bei einem Schieberegler, wenn der ausgewählte Wert innerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":out-of-range")}}
  - : Trifft auf Elemente mit Bereichsbeschränkungen zu. Beispielsweise bei einem Schieberegler, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Trifft zu, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Trifft zu, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Repräsentiert ein Element mit korrekter Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Repräsentiert ein Element mit falscher Eingabe, jedoch nur, wenn der Benutzer damit interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen reflektieren die Dokumentensprache und ermöglichen die Auswahl von Elementen basierend auf der Sprache oder Schreibrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtlinien-Pseudo-Klasse wählt ein Element basierend auf dessen Richtlinien aus, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählen Sie ein Element basierend auf seiner Inhaltssprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und zielgerichtete Elemente im aktuellen Dokument.

- {{CSSxRef(":any-link")}}
  - : Trifft auf ein Element zu, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} entsprechen würde.
- {{CSSxRef(":link")}}
  - : Trifft auf Links zu, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Trifft auf Links zu, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Trifft auf Links zu, deren absolute URL der Ziel-URL entspricht. Zum Beispiel Ankerlinks auf derselben Seite.
- {{CSSxRef(":target")}}
  - : Trifft auf das Element zu, welches das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Trifft auf Elemente zu, die das Ziel der Dokument-URL sind, aber auch auf Elemente, die einen Nachfahren haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Repräsentiert Elemente, die einen Referenzpunkt für Selektoren darstellen, gegen den gematcht wird.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in einem Zustand sein können, den man als spielend beschreiben würde, wie ein Video.

- {{CSSxRef(":playing")}}
  - : Repräsentiert ein Medienelement, das in der Lage ist zu spielen, wenn dieses Element abgespielt wird.
- {{CSSxRef(":paused")}}
  - : Repräsentiert ein Medienelement, das in der Lage ist zu spielen, wenn dieses Element pausiert ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten, wenn man etwas betrachtet, das zeitlich abläuft, wie z.B. eine [WebVTT](/de/docs/Web/API/WebVTT_API)-Untertitelspur.

- {{CSSxRef(":current")}}
  - : Repräsentiert das Element oder einen Vorfahren des Elements, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Repräsentiert ein Element, das vollständig vor dem {{CSSxRef(":current")}}-Element auftritt.
- {{CSSxRef(":future")}}
  - : Repräsentiert ein Element, das vollständig nach dem {{CSSxRef(":current")}}-Element auftritt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentbaums.

- {{CSSxRef(":root")}}
  - : Repräsentiert ein Element, das die Wurzel des Dokuments ist. Im HTML ist dies normalerweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Repräsentiert ein Element ohne Kinder außer Leerzeichenzeichen.
- {{CSSxRef(":nth-child")}}
  - : Verwendet die Notation `An+B` um Elemente aus einer Liste von Geschwisterelementen auszuwählen.
- {{CSSxRef(":nth-last-child")}}
  - : Verwendet die Notation `An+B` um Elemente aus einer Liste von Geschwisterelementen auszuwählen, rückwärts von Ende der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Trifft auf ein Element zu, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Trifft auf ein Element zu, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Trifft auf ein Element zu, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type")}}
  - : Verwendet die Notation `An+B` um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einen bestimmten Typ aus einer Liste von Geschwisterelementen entspricht.
- {{CSSxRef(":nth-last-of-type")}}
  - : Verwendet die Notation `An+B` um Elemente aus einer Liste von Geschwisterelementen auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwisterelementen rückwärts von Ende der Liste entspricht.
- {{CSSxRef(":first-of-type")}}
  - : Trifft auf ein Element zu, das das erste seiner Geschwister ist und entspricht zusätzlich einem bestimmten Typselektor.
- {{CSSxRef(":last-of-type")}}
  - : Trifft auf ein Element zu, das das letzte seiner Geschwister ist und entspricht zusätzlich einem bestimmten Typselektor.
- {{CSSxRef(":only-of-type")}}
  - : Trifft auf ein Element zu, das keine Geschwister des gewählten Typselektors hat.

## Benutzeraktions-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine gewisse Interaktion des Benutzers, um zuzutreffen, wie zum Beispiel das Halten eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Trifft zu, wenn ein Benutzer ein Element mit einem Zeigegerät auswählt, wie zum Beispiel das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Trifft zu, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn auf das Element geklickt wird.
- {{CSSxRef(":focus")}}
  - : Trifft zu, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Trifft zu, wenn ein Element den Fokus hat und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Trifft auf ein Element zu, auf das {{CSSxRef(":focus")}} zutrifft, plus auf jedes Element, das einen Nachfahren hat, auf den {{CSSxRef(":focus")}} zutrifft.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [verzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- [`:is()`](/de/docs/Web/CSS/:is)
  - : Die Übereinstimmung mit jeder Pseudo-Klasse trifft auf jedes Element zu, das jedem der Selektoren in der bereitgestellten Liste entspricht. Die Liste ist verzeihend.
- [`:not()`](/de/docs/Web/CSS/:not)
  - : Die Verneinung oder keine Übereinstimmung mit dieser Pseudo-Klasse repräsentiert jedes Element, das nicht durch sein Argument repräsentiert wird.
- [`:where()`](/de/docs/Web/CSS/:where)
  - : Die Spezifitätsanpassungs-Pseudo-Klasse trifft auf jedes Element zu, das jedem der Selektoren in der bereitgestellten Liste ohne Hinzufügen von Spezifitätsgewicht entspricht. Die Liste ist verzeihend.
- [`:has()`](/de/docs/Web/CSS/:has)
  - : Die relationale Pseudo-Klasse repräsentiert ein Element, wenn einer der relativen Selektoren übereinstimmt, wenn gegen das angehängte Element verankert.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie bei regulären Klassen können Sie in einem Selektor so viele Pseudo-Klassen aneinanderreihen, wie Sie möchten.

## Alphabetisches Verzeichnis

Pseudo-Klassen, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen die folgenden:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} {{Experimental_Inline}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}}

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
- {{CSSxRef(":future")}} {{Experimental_Inline}}

H

- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}}

M

- {{CSSxRef(":modal")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
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
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}

W

- {{CSSxRef(":where", ":where()")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
