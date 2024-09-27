---
title: Textetiketten und Namen
slug: Web/Accessibility/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Es gibt viele Situationen, in denen eine Steuerung, ein Dialog oder ein anderes Website-Feature einen beschreibenden Namen oder ein Etikett erhalten sollte, um Benutzern von unterstützenden Technologien zu ermöglichen, dessen Zweck zu verstehen und korrekt zu bedienen. Es gibt eine Reihe unterschiedlicher Problemtypen in dieser Kategorie, die in verschiedenen Kontexten gefunden werden, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das alt-Attribut, um Bereichselemente zu beschriften, die das href-Attribut haben

In Image Maps geben Sie jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressource der Bereich verweist. Wenn dies nicht geschieht, wird eine Image Map für Benutzer von unterstützenden Technologien schwer zu nutzen — sie benötigen Alternativtext, um den Zweck eines Bildes zu verstehen.

### Beispiele

Das folgende Beispiel zeigt eine einfache Image Map (übernommen von [H24: Bereitstellung von Textalternativen für die area-Elemente von Image Maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

```html
<img
  src="welcome.gif"
  usemap="#map1"
  alt="Areas in the library. Select an area for
more information on that area." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30" href="reference.html" alt="Reference" />
  <area
    shape="rect"
    coords="34,34,100,100"
    href="media.html"
    alt="Audio visual lab" />
</map>
```

Siehe die [`<area>`-Element-Referenzseite](/de/docs/Web/HTML/Element/area) für ein interaktives Live-Beispiel.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die area-Elemente von Image Maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet werden

Jedes Container-Element, dessen Inhalt wie ein Dialogfeld funktioniert (zum Beispiel ein modaler Dialog, der den Benutzer auffordert, eine Entscheidung zu treffen oder auf eine Aktion zu reagieren), sollte ein beschreibendes Etikett oder einen Namen erhalten, damit Benutzer unterstützender Technologien leicht erkennen können, welchen Zweck es hat.

Ein Dialogfeld wird im Allgemeinen durch ein ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, um eine Beschriftung bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein einfaches Dialogfeld, definiert mit `role="dialog"` und gekennzeichnet mit `aria-labelledby`.

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Beschriftungstext zu enthalten:

```html
<div role="dialog" aria-label="Personal details updated confirmation">
  <p>
    Your personal details were successfully updated. You can change your details
    at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

### Siehe auch

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [WAI-ARIA: dialog role](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog Autorenausführung](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument einen {{htmlelement("title")}} zu haben, der den Zweck der Seite beschreibt. Ein gängiges Navigationsverfahren für Benutzer unterstützender Technologien besteht darin, den Titel zu lesen, um Rückschlüsse auf den Inhalt einer Seite zu ziehen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite erkunden, um den Inhalt zu ermitteln, was zeitaufwändig und potenziell verwirrend sein kann.

### Beispiele

Der Titel des Referenzartikels über das {{htmlelement("title")}}-Element ist wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte so aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Benutzer zu helfen, können Sie den Seitentitelwert aktualisieren, um signifikante Änderungen des Seitenstatus widerzuspiegeln (wie etwa bei Formularkontrollproblemen):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet sein

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Global_attributes/title)-Attribut haben, das den eingebetteten Inhalt beschreibt. Dies umfasst die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern unterstützender Technologien, zu verstehen, was das Element zeigt.

## Figuren mit optionalen Bildunterschriften sollten beschriftet sein

Für die beste Barrierefreiheit fügen Sie innerhalb eines {{HTMLElement("figure")}}-Elements eine {{HTMLElement("figcaption")}} hinzu, auch wenn dies technisch optional ist. Die Bildunterschrift ist zusätzlich zu jedem Alternativtext auf Bildern innerhalb der Figur. Die Bildunterschrift beschreibt den Zweck der Figur im Dokument, was sich von einer einfachen Beschreibung eines visuellen Elements, wie sie durch den Alternativtext bereitgestellt wird, unterscheiden kann.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Figur mit einer Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; die {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Feldsatz-Elemente müssen beschriftet sein

Feldsatz-Elemente müssen eine Textbeschreibung haben, ähnlich wie andere Formularelemente. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Feldsatzes zu beschreiben.

## Verwenden Sie eine Legende, um einen Feldsatz zu beschriften

Beim Gruppieren eines Satzes von Formularelementen mit einem {{htmlelement("fieldset")}}-Element sollten Sie ein geschachteltes {{htmlelement("legend")}}-Element enthalten, das eine klare Beschreibung der Gruppe enthält.

Benutzer unterstützender Technologien finden diese Beschreibung hilfreich, wenn sie versuchen, die Gesamtbedeutung der Gruppe zu ergründen. Ohne die Legende müssten sie um die einzelnen Formularelemente der Gruppe navigieren, um eine Vorstellung vom Gesamtzweck zu bekommen, was zu Verwirrung führen könnte.

### Beispiele

```html
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Ein interaktives Live-Beispiel finden Sie auf der [`<fieldset>` Referenzseite](/de/docs/Web/HTML/Element/fieldset).

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet sein

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das ihren Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie für {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente sowie für jedes Element mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, wobei die Zuordnung zwischen dem Formularelement und dem Label aus der Struktur offensichtlich ist. Oder Sie können eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement erstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="emailoptin" name="optin" />
<label for="emailoptin">Yes, please send me news about this product.</label>
```

## Formularelemente sollten eine sichtbare Textbeschriftung haben

Zusätzlich zu einem {{htmlelement("label")}} für jedes Formularelement sollten diese Beschriftungen sichtbar sein und nicht versteckt werden. Sichtbare Beschriftungen helfen _allen_ Benutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer zu tippen beginnt.

## Frame-Elemente müssen beschriftet sein

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, um den Inhalt des Frames zu beschreiben. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu beschriften. Ohne einen Titel müssen Benutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern eingestellt werden. Darüber hinaus ist es für Bildschirmleser schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für optimale Barrierefreiheit und zukünftige Wartung sollten Sie alle Seiten, die Frames verwenden, neu gestalten, um mit CSS ein ähnliches Layout zu erreichen.

Es ist auch eine bewährte Praxis, einen {{htmlelement("title")}} für das Dokument bereitzustellen, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle ist; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Bildschirmleser ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des eingeschlossenen Dokuments. Am sichersten und für die Barrierefreiheit am besten ist es, denselben Titel an beiden Stellen bereitzustellen.

### Beispiel

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Überschriften müssen beschriftet sein

Stellen Sie sicher, dass Ihre Überschriften nicht-leeren Textinhalt haben und nicht ausgeblendet sind, z. B. mit CSS `display:none` oder `aria-hidden=true`. Benutzer von Bildschirmlesern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Achten Sie auch darauf, [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften zu verwenden und nicht als Abkürzung, um Text hervorzuheben. Benutzer von Bildschirmlesern "überfliegen" typischerweise die Überschriften einer Seite, ähnlich wie sehende Benutzer; Nicht-Überschriftstext, der mit Überschriftselementen ausgezeichnet ist, kann zu Verwirrung führen.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht-leeren Textinhalt haben und nicht ausgeblendet sind, z. B. mit CSS `display:none` oder `aria-hidden=true`. Benutzer von Bildschirmlesern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte auszuzeichnen.

## Verwenden Sie das title-Attribut, um `<iframe>` Inhalt zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne einen Titel müssen Benutzer unterstützender Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Es ist auch eine bewährte Praxis, einen {{htmlelement("title")}} für das Dokument bereitzustellen, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle ist; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Bildschirmleser ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des eingeschlossenen Dokuments. Am sichersten und für die Barrierefreiheit am besten ist es, denselben Titel an beiden Stellen bereitzustellen.

## Inhalt mit Bildern muss beschriftet werden

Stellen Sie sicher, dass für alle wesentlichen (d. h. nicht dekorativen) Bilder und bildähnlichen Elemente beschreibender Text bereitgestellt wird. Dies umfasst SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen `type` mit `image/` beginnt. Der typische Weg, dies zu tun, ist mit dem `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild zu sehen ist.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element für Benutzer gedacht ist, um damit zu interagieren, sollte es ein Etikett haben. Interaktive Elemente umfassen Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art und Weise, wie ein Element beschriftet wird, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet der Textinhalt des Elements typischerweise das Etikett. Wenn es keine andere Möglichkeit gibt, ein Element zu beschriften, verwenden Sie das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

## Verwenden Sie das label-Attribut an optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe zu beschreiben, damit unterstützende Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut an den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Optionsgruppe an.

```html
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

## Werkzeugleisten müssen beschriftet sein, wenn mehr als eine Werkzeugleiste vorhanden ist

Wenn Sie mehr als eine Werkzeugleiste in einer Webanwendung mit der ARIA `toolbar`-Rolle definieren, müssen Sie das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwenden, um jede einzelne zu beschriften, damit sie von unterstützender Technologie beschrieben werden kann. Es ist eine gute Praxis, eine Werkzeugleiste zu beschriften, auch wenn es pro Seite nur eine gibt.

### Siehe auch

- [W3C ARIA toolbar Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die denselben Zweck dient, außer in den oben genannten Situationen.
- [2.4.4 Link-Zweck (im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder in Verbindung mit seinem programmatisch bestimmten Link-Kontext ermittelt werden, außer wenn der Zweck des Links für die Benutzer im Allgemeinen mehrdeutig wäre.
- [2.4.9 Link-Zweck (nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Eine Mechanismus ist verfügbar, um es dem Benutzer zu ermöglichen, den Zweck jedes Links allein aus dem Linktext zu erkennen, außer wenn der Zweck des Links für die Benutzer im Allgemeinen mehrdeutig wäre.
