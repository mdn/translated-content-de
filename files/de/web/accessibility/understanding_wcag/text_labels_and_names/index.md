---
title: Textbeschriftungen und -namen
slug: Web/Accessibility/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Es gibt viele Situationen, in denen ein Steuerelement, ein Dialogfeld oder eine andere Website-Funktion einen beschreibenden Namen oder ein Etikett erhalten sollte, damit Benutzer von unterstützenden Technologien verstehen, welchen Zweck sie hat und wie sie korrekt bedient wird. Es gibt eine Reihe von unterschiedlichen Problemtypen in dieser Kategorie, die in verschiedenen Kontexten auftreten, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das alt-Attribut, um Bereichselemente zu kennzeichnen, die das href-Attribut haben

In Bildkarten geben Sie jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, worauf die Bereiche verlinken. Wird dies nicht getan, wird eine Bildkarte für Benutzer von unterstützenden Technologien schwer nutzbar — sie benötigen Alternativtext, um den Zweck einer Bildkarte zu verstehen.

### Beispiele

Das folgende Beispiel zeigt eine einfache Bildkarte (aus [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

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

Siehe die Referenzseite für das [`<area>`-Element](/de/docs/Web/HTML/Element/area) für ein interaktives Live-Beispiel.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet werden

Geben Sie jedem Container, dessen Inhalt als Dialogfeld dient (zum Beispiel ein modales Dialogfeld, das den Benutzer auffordert, eine Wahl zu treffen oder auf eine Aktion zu reagieren), ein beschreibendes Etikett oder einen Namen, damit Benutzer von unterstützenden Technologien leicht entdecken können, welchen Zweck es erfüllt.

Ein Dialogfeld wird in der Regel durch einen ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) angegeben; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, um eine Bezeichnung bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein einfaches Dialogfeld, das als solches mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet wird.

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
- [Dialog-Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument einen {{htmlelement("title")}} einzuschließen, der den Zweck der Seite beschreibt. Eine gängige Navigationstechnik für Benutzer von unterstützenden Technologien besteht darin, aus dem Titel den Inhalt einer Seite abzuleiten. Wenn der Titel nicht verfügbar ist, müssen sie die Seite navigieren, um ihren Inhalt zu bestimmen, was ein zeitaufwändiger und potenziell verwirrender Prozess sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element ist wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte folgendermaßen aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Benutzer zu helfen, können Sie den Seitentitelwert aktualisieren, um bedeutende Zustandsänderungen der Seite zu reflektieren (wie z.B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebetteter Inhalt muss beschriftet sein

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Global_attributes/title)-Attribut haben, das den eingebetteten Inhalt beschreibt. Dazu gehören die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich wie das {{htmlelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern von unterstützenden Technologien, zu verstehen, was das Element anzeigt.

## Figuren mit optionalen Bildunterschriften sollten beschriftet sein

Für beste Zugänglichkeit, schließen Sie ein {{HTMLElement("figcaption")}} innerhalb eines {{HTMLElement("figure")}}-Elements ein, auch wenn dies technisch optional ist. Die Bildunterschrift ist zusätzlich zu einem Alternativtext auf den Bildern innerhalb der Figur. Die Bildunterschrift beschreibt den Zweck der Figur im Dokument, der sich von einer einfachen Beschreibung eines visuellen Elements unterscheiden kann, wie sie vom Alternativtext bereitgestellt wird.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Figur mit einer Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; das {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet sein

Fieldset-Elemente müssen, ähnlich wie andere Formularelemente, eine Textbeschreibung haben. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu beschriften

Beim Gruppieren einer Menge von Formularelementen mit einem {{htmlelement("fieldset")}}-Element sollten Sie ein verschachteltes {{htmlelement("legend")}}-Element darin einschließen, das eine klare Beschreibung der Gruppe enthält.

Benutzer von unterstützenden Technologien finden diese Beschreibung hilfreich, wenn sie versuchen, den Gesamtsinn der Gruppe zu bestimmen. Ohne die Legende müssten sie um die einzelnen Steuerelemente im Formular navigieren, um eine Idee über den Gesamtzweck zu bekommen, was zu Verwirrung führen könnte.

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

Sie können eine Live-Version dieses Beispiels auf der Referenzseite für das [`<fieldset>`-Element](/de/docs/Web/HTML/Element/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet sein

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das seinen Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen, sowie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente, sowie für alle Elemente mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, in welchem Fall die Zuordnung zwischen dem Formularelement und dem Etikett aus der Struktur offensichtlich ist. Oder, Sie können eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement erstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Etiketts angeben.

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

Zusätzlich zum Vorhandensein eines {{htmlelement("label")}} für jedes Formularelement sollten diese Etiketten sichtbar und nicht verborgen sein. Sichtbare Etiketten helfen _allen_ Benutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer zu tippen beginnt.

## Frame-Elemente müssen beschriftet sein

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, um den Inhalt des Frames zu beschreiben. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu kennzeichnen. Ohne einen Titel müssen Benutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung könnte in Zukunft von Browsern entfernt werden. Außerdem ist es für Screenreader schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartung sollten Sie alle Seiten neu gestalten, die Frames verwenden, um mit CSS ein ähnliches Layout zu erzielen.

Als Best Practice geben Sie auch ein {{htmlelement("title")}} für das Dokument an, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Dokumenttitel anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des im Frame eingeschlossenen Dokuments {{htmlelement("title")}}. Am sichersten und zugänglichsten ist es, den gleichen Titel an beiden Stellen zu verwenden.

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

Achten Sie darauf, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht verborgen sind, beispielsweise durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Benutzer von Screenreadern "überfliegen" eine Seite typischerweise anhand der Überschriften, ähnlich wie sehende Benutzer; Text, der mit Überschriftselementen markiert ist, kann Verwirrung stiften, wenn es sich nicht um Überschriften handelt.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht verborgen sind, beispielsweise durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte zu markieren.

## Verwenden Sie das title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne einen Titel müssen Benutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als Best Practice geben Sie auch ein {{htmlelement("title")}} für das Dokument an, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Dokumenttitel anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des im Frame eingeschlossenen Dokuments {{htmlelement("title")}}. Am sichersten und zugänglichsten ist es, den gleichen Titel an beiden Stellen zu verwenden.

## Inhalte mit Bildern müssen beschriftet sein

Stellen Sie für alle inhaltsschweren (das heißt, nicht dekorativen) Bilder und bildähnlichen Elemente beschreibenden Text zur Verfügung. Dies schließt SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente ebenso ein wie {{htmlelement("input")}}-Elemente, die `type=image` und {{htmlelement("object")}}-Elemente, bei denen `type` mit `image/` beginnt, verwenden. Der typische Weg, dies zu tun, ist über das `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet sein

Wenn ein Element für Benutzer zur Interaktion bestimmt ist, sollte es ein Etikett haben. Interaktive Elemente umfassen Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art, ein Element zu beschriften, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet der Textinhalt des Elements typischerweise die Beschriftung. Wenn keine andere Option existiert, um ein Element zu kennzeichnen, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.

## Verwenden Sie das Label-Attribut bei optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe zu beschreiben, sodass unterstützende Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut auf den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe der Optionen.

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

## Symbolleisten müssen beschriftet werden, wenn es mehr als eine Symbolleiste gibt

Wenn Sie in einer Webanwendung mehr als eine Symbolleiste mit der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwenden, um jede zu kennzeichnen, damit sie von unterstützender Technologie beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu beschriften, auch wenn es nur eine pro Seite gibt.

### Siehe auch

- [W3C ARIA toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die den gleichen Zweck erfüllt, außer in den oben verlinkten Situationen.
- [2.4.4 Link Purpose (In Context) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext zusammen mit dessen programmatisch bestimmtem Kontext ermittelt werden, es sei denn, der Zweck des Links wäre für Benutzer im Allgemeinen mehrdeutig.
- [2.4.9 Link Purpose (Link Only) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Es ist ein Mechanismus verfügbar, der es ermöglicht, den Zweck jedes Links allein aus dem Linktext zu identifizieren, es sei denn, der Zweck des Links wäre für Benutzer im Allgemeinen mehrdeutig.
