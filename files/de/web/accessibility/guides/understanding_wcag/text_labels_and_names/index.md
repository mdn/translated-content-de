---
title: Textbeschriftungen und Namen
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Es gibt viele Situationen, in denen ein Steuerelement, ein Dialogfeld oder eine andere Website-Funktion einen beschreibenden Namen oder ein Etikett erhalten sollte, um Benutzern assistiver Technologien zu ermöglichen, den Zweck und die Bedienung korrekt zu verstehen. Es gibt mehrere verschiedene Arten von Problemen in dieser Kategorie, die in unterschiedlichen Kontexten auftreten, und jede hat ihre eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das `alt`-Attribut, um Bereichelemente mit dem `href`-Attribut zu kennzeichnen

Geben Sie in Bildkarten jedem {{htmlelement("area")}}-Element ein `alt`-Attribut mit einem Namen, der beschreibt, worauf die Bereiche verlinken. Wenn dies unterlassen wird, wird eine Bildkarte für Benutzer assistiver Technologien schwer nutzbar – sie benötigen Alternativtext, um den Zweck eines Bildes verstehen zu können.

### Beispiele

Das folgende Beispiel zeigt eine Bildkarte (entnommen von [H24: Bereitstellen von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

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

Sehen Sie sich die [Referenzseite des `<area>`-Elements](/de/docs/Web/HTML/Reference/Elements/area) für ein interaktives Live-Beispiel an.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellen von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten gekennzeichnet werden

Für jeden Container, dessen Inhalt als Dialogfeld fungiert (zum Beispiel ein modales Dialogfeld, das den Benutzer auffordert, eine Auswahl zu treffen oder auf eine durchgeführte Aktion zu reagieren), geben Sie ihm ein beschreibendes Etikett oder einen Namen, damit Benutzer assistiver Technologien leicht herausfinden können, was dessen Zweck ist.

Ein Dialogfeld wird im Allgemeinen durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden, um ein Etikett bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein Dialogfeld, das mit `role="dialog"` definiert und mit `aria-labelledby` gekennzeichnet ist.

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

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Etikettentext zu enthalten:

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

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [WAI-ARIA: dialog role](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog-Erstellungspraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, jedem HTML-Dokument einen {{htmlelement("title")}} hinzuzufügen, der den Zweck der Seite beschreibt. Eine gängige Navigationstechnik für Benutzer assistiver Technologien besteht darin, den Inhalt einer Seite zu erschließen, indem sie den Titel lesen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite durchforsten, um deren Inhalt zu bestimmen, was ein zeitaufwändiger und potenziell verwirrender Prozess sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element lautet wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte wie folgt aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Benutzer zu helfen, können Sie den Titelwert der Seite aktualisieren, um wesentliche Zustandsänderungen der Seite widerzuspiegeln (wie z. B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet sein

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut haben, das die eingebetteten Inhalte beschreibt. Dies schließt die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente ein. Diese Elemente werden häufig für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern assistiver Technologien, zu verstehen, was das Element anzeigt.

## Abbildungen mit optionalen Bildunterschriften sollten beschriftet werden

Für beste Zugänglichkeit fügen Sie ein {{HTMLElement("figcaption")}} innerhalb eines {{HTMLElement("figure")}}-Elements hinzu, auch wenn dies technisch optional ist. Die Bildunterschrift ergänzt jeden Alternativtext zu Bildern innerhalb der Abbildung. Die Bildunterschrift beschreibt den Zweck der Abbildung im Dokument, der sich von einer Beschreibung eines visuellen Elements, wie sie der Alternativtext liefert, unterscheiden kann.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Abbildung mit einer Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; das {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet werden

Fieldset-Elemente müssen eine Textbeschreibung haben, ähnlich wie andere Formular-Elemente. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu kennzeichnen

Wenn eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element gruppiert wird, sollte ein verschachteltes {{htmlelement("legend")}}-Element darin enthalten sein, das eine klare Beschreibung der Gruppe enthält.

Benutzer assistiver Technologien finden diese Beschreibung hilfreich, um den Gesamtnutzen der Gruppe zu erkennen. Ohne die Legende müssten sie um die einzelnen Formularelemente der Gruppe navigieren, um eine Vorstellung vom Gesamtnutzen zu erhalten, was zu Verwirrung führen könnte.

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

Sie können eine Live-Version dieses Beispiels auf der [`<fieldset>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet sein

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das ihren Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elementen sowie für jedes Element mit der [`switch` ARIA role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, wobei die Zuordnung zwischen dem Formularelement und dem Label aus der Struktur ersichtlich ist. Alternativ können Sie eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement erstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">Yes, please send me news about this product.</label>
```

## Formularelemente sollten ein sichtbares Textetikett haben

Neben einem {{htmlelement("label")}} für jedes Formularelement sollten diese Etiketten sichtbar und nicht versteckt sein. Sichtbare Etiketten helfen _allen_ Benutzern, den Zweck eines Formularelements zu verstehen. Vertrauen Sie nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer zu schreiben beginnt.

## Frame-Elemente müssen beschriftet werden

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, um den Inhalt des Frames zu beschreiben. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu beschriften. Ohne einen Titel müssen Benutzer assistiver Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Unterstützung dafür könnte in Zukunft von Browsern entfernt werden. Außerdem ist es für Screenreader schwierig, durch Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartbarkeit sollten Seiten, die Frames verwenden, neu gestaltet werden, um mit CSS ein ähnliches Layout zu erreichen.

Als bewährte Praxis sollte auch ein {{htmlelement("title")}} für das Dokument bereitgestellt werden, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des eingeschlossenen Dokuments. Es ist am sichersten und am zugänglichsten, denselben Titel an beiden Stellen bereitzustellen.

### Beispiel

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Überschriften müssen beschriftet werden

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, z. B. mit CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern sind auf Überschriften angewiesen, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Achten Sie auch darauf, die [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) nur für tatsächliche Abschnittsüberschriften zu verwenden und nicht als Abkürzung, um Text hervorzuheben. Screenreader-Benutzer "überfliegen" typischerweise die Überschriften einer Seite, ähnlich wie sehende Benutzer; Text, der nicht als Überschrift gedacht ist, aber mit Überschriftselementen ausgezeichnet ist, kann Verwirrung stiften.

## Überschriften sollten sichtbaren Textinhalt besitzen

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, wie etwa mit CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern sind auf Überschriften angewiesen, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie Überschriftselemente nicht, um Bilder oder andere grafische Inhalte zu markieren.

## Verwenden Sie das `title`-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne einen Titel müssen Benutzer assistiver Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als bewährte Praxis sollte auch ein {{htmlelement("title")}} für das Dokument bereitgestellt werden, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des eingeschlossenen Dokuments. Es ist am sichersten und am zugänglichsten, denselben Titel an beiden Stellen bereitzustellen.

## Inhalte mit Bildern müssen beschriftet sein

Stellen Sie für alle inhaltlichen (also nicht dekorativen) Bilder und bildähnlichen Elemente beschreibenden Text bereit. Dies schließt SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente ein sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen `type` mit `image/` beginnt. Der typische Weg, dies zu tun, ist mit dem `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung wiedergibt, was im Bild zu sehen ist.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet sein

Wenn ein Element für die Interaktion durch Benutzer vorgesehen ist, sollte es ein Etikett haben. Interaktive Elemente umfassen Links ({{htmlelement("a")}}), Formularelemente, Buttons und jedes Element, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art und Weise, wie ein Element beschriftet werden sollte, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Buttons und klickbare Elemente liefert der Textinhalt des Elements typischerweise das Etikett. Wenn keine andere Option zur Beschriftung eines Elements existiert, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.

## Verwenden Sie das `label`-Attribut bei optgroup-Elementen

Verwenden Sie im {{htmlelement("optgroup")}}-Element das `label`-Attribut, um die Gruppe zu beschreiben, damit assistive Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut in den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe von Optionen an.

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

## Symbolleisten müssen beschriftet sein, wenn es mehr als eine Symbolleiste gibt

Wenn Sie mehr als eine Symbolleiste in einer Webanwendung mit der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwenden, um jede zu beschriften, damit sie von assistiver Technologie beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu beschriften, auch wenn es nur eine pro Seite gibt.

### Siehe auch

- [W3C ARIA toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-textueller Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textuellen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die den gleichen Zweck erfüllt, mit Ausnahme der im obigen Link aufgelisteten Situationen.
- [2.4.4 Zweck des Links (im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext zusammen mit dem programmgesteuerten Linkkontext bestimmt werden, außer in Fällen, in denen der Zweck des Links für Benutzer im Allgemeinen mehrdeutig wäre.
- [2.4.9 Zweck des Links (nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Es ist ein Mechanismus verfügbar, der es ermöglicht, den Zweck jedes Links allein aus dem Linktext zu identifizieren, mit Ausnahme von Fällen, in denen der Zweck des Links für Benutzer im Allgemeinen mehrdeutig wäre.
