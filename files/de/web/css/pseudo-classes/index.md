---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: c872bb2ac414de62c71f140abd435bb7f89f1648
---

{{CSSRef}}

Eine [CSS](/de/docs/Web/CSS) **_pseudo-Klasse_** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und es ermöglicht, einen bestimmten Zustand des ausgewählten Elements (oder der Elemente) zu stylen. Beispielsweise kann die Pseudo-Klasse {{CSSxRef(":hover")}} verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Benutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestylt werden.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

Eine Pseudo-Klasse besteht aus einem Doppelpunkt (`:`), gefolgt vom Namen der Pseudo-Klasse (z.B. `:hover`). Eine funktionale Pseudo-Klasse enthält auch ein Paar runder Klammern, um die Argumente zu definieren (z.B. `:dir()`). Das Element, an das eine Pseudo-Klasse angehängt ist, wird als _Ankerelement_ definiert (z.B. `button` im Fall von `button:hover`).

Pseudo-Klassen ermöglichen es Ihnen, einem Element nicht nur in Bezug auf den Inhalt des Dokumentenbaums, sondern auch in Bezug auf externe Faktoren wie die Historie des Navigators (zum Beispiel {{CSSxRef(":visited")}}), den Status seines Inhalts (wie {{CSSxRef(":checked")}} bei bestimmten Formelementen) oder die Position der Maus (wie {{CSSxRef(":hover")}}, die Ihnen zeigt, ob die Maus über einem Element ist oder nicht) einen Stil zuzuweisen.

> [!NOTE]
> Im Gegensatz zu Pseudo-Klassen können [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, um einen _bestimmten Teil_ eines Elements zu stylen.

## Pseudo-Klassen für den Anzeigezustand von Elementen

Diese Pseudo-Klassen ermöglichen die Auswahl von Elementen basierend auf ihrem Anzeigezustand.

- {{CSSxRef(":fullscreen")}}
  - : Stimmt mit einem Element überein, das sich derzeit im Vollbildmodus befindet.
- {{CSSxRef(":modal")}}
  - : Stimmt mit einem Element überein, das in einem Zustand ist, in dem es alle Interaktionen mit Elementen außerhalb ausschließt, bis die Interaktion beendet wird.
- {{CSSxRef(":picture-in-picture")}}
  - : Stimmt mit einem Element überein, das sich derzeit im Bild-in-Bild-Modus befindet.

## Eingabe-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Formularelemente und ermöglichen die Auswahl von Elementen basierend auf HTML-Attributen und dem Zustand, in dem sich das Feld vor und nach der Interaktion befindet.

- {{CSSxRef(":autofill")}}
  - : Stimmt, wenn ein {{htmlelement("input")}} vom Browser automatisch ausgefüllt wurde.
- {{CSSxRef(":enabled")}}
  - : Stellt ein Benutzeroberflächenelement dar, das in einem aktivierten Zustand ist.
- {{CSSxRef(":disabled")}}
  - : Stellt ein Benutzeroberflächenelement dar, das in einem deaktivierten Zustand ist.
- {{CSSxRef(":read-only")}}
  - : Stellt ein Element dar, das vom Benutzer nicht geändert werden kann.
- {{CSSxRef(":read-write")}}
  - : Stellt ein bearbeitbares Element dar.
- {{CSSxRef(":placeholder-shown")}}
  - : Passt zu einem Eingabeelement, das Placeholder-Text anzeigt. Zum Beispiel wird es das `placeholder`-Attribut in den {{htmlelement("input")}} und {{htmlelement("textarea")}} Elementen treffen.
- {{CSSxRef(":default")}}
  - : Stimmt mit einem oder mehreren UI-Elementen überein, die unter einem Satz von Elementen die Standardwerte sind.
- {{CSSxRef(":checked")}}
  - : Stimmt, wenn solche Elemente wie Kontrollkästchen und Optionsfelder eingeschaltet sind.
- {{CSSxRef(":indeterminate")}}
  - : Stimmt mit UI-Elementen überein, wenn sie sich in einem unbestimmten Zustand befinden.
- {{CSSxRef(":blank")}}
  - : Passt zu einem Benutzereingabe-Element, das leer ist, einen leeren String oder eine andere null Eingabe enthält.
- {{CSSxRef(":valid")}}
  - : Stimmt mit einem Element mit gültigem Inhalt überein. Zum Beispiel ein Eingabeelement mit dem Typ 'email', das eine gültig geformte E-Mail-Adresse enthält oder einen leeren Wert, wenn das Steuerelement nicht erforderlich ist.
- {{CSSxRef(":invalid")}}
  - : Stimmt mit einem Element mit ungültigem Inhalt überein. Zum Beispiel ein Eingabeelement mit Typ 'email' mit einem eingegebenen Namen.
- {{CSSxRef(":in-range")}}
  - : Gilt für Elemente mit Reichweitenbeschränkungen. Beispielsweise ein Schieberegler-Steuerelement, wenn der ausgewählte Wert innerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":out-of-range")}}
  - : Gilt für Elemente mit Reichweitenbeschränkungen. Beispielsweise ein Schieberegler-Steuerelement, wenn der ausgewählte Wert außerhalb des erlaubten Bereichs liegt.
- {{CSSxRef(":required")}}
  - : Passt, wenn ein Formularelement erforderlich ist.
- {{CSSxRef(":optional")}}
  - : Passt, wenn ein Formularelement optional ist.
- {{CSSxRef(":user-valid")}}
  - : Stellt ein Element mit korrekter Eingabe dar, jedoch nur, wenn der Benutzer mit ihm interagiert hat.
- {{CSSxRef(":user-invalid")}}
  - : Stellt ein Element mit falscher Eingabe dar, jedoch nur, wenn der Benutzer mit ihm interagiert hat.

## Sprachliche Pseudo-Klassen

Diese Pseudo-Klassen spiegeln die Dokumentensprache wider und ermöglichen die Auswahl von Elementen basierend auf Sprache oder Skriptrichtung.

- {{CSSxRef(":dir", ":dir()")}}
  - : Die Richtungs-Pseudo-Klasse wählt ein Element basierend auf seiner Richtung, wie sie durch die Dokumentensprache bestimmt wird.
- {{CSSxRef(":lang", ":lang()")}}
  - : Wählt ein Element basierend auf seiner Inhaltsprache aus.

## Standort-Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf Links und auf anvisierte Elemente innerhalb des aktuellen Dokuments.

- {{CSSxRef(":any-link")}}
  - : Passt zu einem Element, wenn das Element entweder {{CSSxRef(":link")}} oder {{CSSxRef(":visited")}} passt.
- {{CSSxRef(":link")}}
  - : Passt zu Links, die noch nicht besucht wurden.
- {{CSSxRef(":visited")}}
  - : Passt zu Links, die besucht wurden.
- {{CSSxRef(":local-link")}}
  - : Passt zu Links, deren absolute URL dieselbe ist wie die Ziel-URL. Zum Beispiel Anker-Links zur selben Seite.
- {{CSSxRef(":target")}}
  - : Passt zu dem Element, das das Ziel der Dokument-URL ist.
- {{CSSxRef(":target-within")}}
  - : Passt zu Elementen, die das Ziel der Dokument-URL sind, aber auch zu Elementen, die einen Nachkommen haben, der das Ziel der Dokument-URL ist.
- {{CSSxRef(":scope")}}
  - : Stellt Elemente dar, die einen Referenzpunkt für Selektoren darstellen, gegen den sie verglichen werden.

## Ressourcenstatus-Pseudo-Klassen

Diese Pseudo-Klassen gelten für Medien, die in der Lage sind, in einem Zustand zu sein, in dem sie als spielend beschrieben werden würden, wie z.B. ein Video.

- {{CSSxRef(":playing")}}
  - : Stellt ein Medienelement dar, das in der Lage ist, abzuspielen, wenn dieses Element gespielt wird.
- {{CSSxRef(":paused")}}
  - : Stellt ein Medienelement dar, das in der Lage ist, abzuspielen, wenn dieses Element pausiert ist.

## Zeitdimensionale Pseudo-Klassen

Diese Pseudo-Klassen gelten beim Betrachten von etwas, das zeitgesteuert ist, wie z.B. eine [WebVTT](/de/docs/Web/API/WebVTT_API) Beschriftungsspur.

- {{CSSxRef(":current")}}
  - : Stellt das Element oder einen Vorgänger des Elements dar, das angezeigt wird.
- {{CSSxRef(":past")}}
  - : Stellt ein Element dar, das vollständig vor dem {{CSSxRef(":current")}} Element liegt.
- {{CSSxRef(":future")}}
  - : Stellt ein Element dar, das vollständig nach dem {{CSSxRef(":current")}} Element liegt.

## Baumstrukturelle Pseudo-Klassen

Diese Pseudo-Klassen beziehen sich auf die Position eines Elements innerhalb des Dokumentenbaums.

- {{CSSxRef(":root")}}
  - : Stellt ein Element dar, das die Wurzel des Dokuments ist. In HTML ist dies üblicherweise das `<html>`-Element.
- {{CSSxRef(":empty")}}
  - : Stellt ein Element dar, das keine Kinder außer Leerzeichen-Zeichen hat.
- {{CSSxRef(":nth-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen.
- {{CSSxRef(":nth-last-child")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, rückwärts von der Liste gezählt.
- {{CSSxRef(":first-child")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist.
- {{CSSxRef(":last-child")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist.
- {{CSSxRef(":only-child")}}
  - : Passt zu einem Element, das keine Geschwister hat. Zum Beispiel ein Listenelement ohne andere Listenelemente in dieser Liste.
- {{CSSxRef(":nth-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern auszuwählen, die einem bestimmten Typ aus einer Liste von Geschwistern entsprechen.
- {{CSSxRef(":nth-last-of-type")}}
  - : Verwendet die `An+B`-Notation, um Elemente aus einer Liste von Geschwistern, die einem bestimmten Typ aus einer Liste von Geschwistern entsprechen, rückwärts vom Ende der Liste auszuwählen.
- {{CSSxRef(":first-of-type")}}
  - : Passt zu einem Element, das das erste seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":last-of-type")}}
  - : Passt zu einem Element, das das letzte seiner Geschwister ist und auch einem bestimmten Typ-Selektor entspricht.
- {{CSSxRef(":only-of-type")}}
  - : Passt zu einem Element, das keine Geschwister des ausgewählten Typ-Selectors hat.

## Benutzeraktionen-Pseudo-Klassen

Diese Pseudo-Klassen erfordern eine Interaktion des Benutzers, damit sie angewendet werden, wie z.B. das Halten eines Mauszeigers über einem Element.

- {{CSSxRef(":hover")}}
  - : Passt, wenn ein Benutzer ein Element mit einem Zeigegerät angibt, wie das Halten des Mauszeigers über dem Element.
- {{CSSxRef(":active")}}
  - : Passt, wenn ein Element vom Benutzer aktiviert wird. Zum Beispiel, wenn das Element angeklickt wird.
- {{CSSxRef(":focus")}}
  - : Passt, wenn ein Element den Fokus hat.
- {{CSSxRef(":focus-visible")}}
  - : Passt, wenn ein Element Fokus hat und der Benutzeragent feststellt, dass das Element sichtbar fokussiert sein sollte.
- {{CSSxRef(":focus-within")}}
  - : Passt zu einem Element, auf das {{CSSxRef(":focus")}} angewendet wird, plus jedes Element, das einen Nachkommen hat, auf den {{CSSxRef(":focus")}} angewendet wird.

## Funktionale Pseudo-Klassen

Diese Pseudo-Klassen akzeptieren eine [Selektorliste](/de/docs/Web/CSS/Selector_list) oder eine [verzeihliche Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) als Parameter.

- [`:is()`](/de/docs/Web/CSS/:is)
  - : Die Matches-Any-Pseudo-Klasse passt zu jedem Element, das mit einem der in der Liste angegebenen Selektoren übereinstimmt. Die Liste ist verzeihlich.
- [`:not()`](/de/docs/Web/CSS/:not)
  - : Die Negation oder Matches-None-Pseudo-Klasse stellt jedes Element dar, das nicht durch sein Argument repräsentiert wird.
- [`:where()`](/de/docs/Web/CSS/:where)
  - : Die Pseudo-Klasse für Spezifitätsanpassung passt zu jedem Element, das mit einem der in der Liste angegebenen Selektoren übereinstimmt, ohne Spezifitätsgewicht hinzuzufügen. Die Liste ist verzeihlich.
- [`:has()`](/de/docs/Web/CSS/:has)
  - : Die relationale Pseudo-Klasse stellt ein Element dar, wenn einer der relativen Selektoren übereinstimmt, wenn er gegen das angehängte Element verankert ist.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Wie reguläre Klassen können Sie in einem Selektor so viele Pseudo-Klassen wie gewünscht aneinanderreihen.

## Alphabetischer Index

Pseudo-Klassen, die durch ein Set von CSS-Spezifikationen definiert sind, umfassen Folgendes:

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
